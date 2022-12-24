import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from "../services/userService";
import { BiEdit, BiTrash, BiMessageRoundedAdd } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { Spinner } from "react-bootstrap";
import { Searcher } from './Searcher';
import MessageTost from './MessageTost';
import { FormAddOrEditUsers } from './FormAddOrEditUsers';
export const ListUsers = () =>
{
    const [userFromApi, setUserFromApi] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [updateUser, setUpdateUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showToast, setShowToast] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [valueForSearch, setValueForSearch] = useState("");
    const [userFiltered, setUserFiltered] = useState([]);
    let message = "";

    let navigate = useNavigate();


    const handleClose = () => setEditModal(false);
    const handleCloseToast = () => setShowToast(false);

    const handleUsers = async () =>
    {
        await getUsers().then(res => 
        {
            setUserFromApi(res.data);
            setUserFiltered(res.data);
            console.log(res.data);
            setIsLoading(false);
        });
    };


    const FilterByCategory = (value) =>
    {
        // si el input no esta vacio..
        if (value !== '')
        {
            // filtro los elementos que incluyen el valor por nombre o name
            // paso los valores que ingresa el usuario a lowercase para unificar
            value = value.toLowerCase();
            const result = userFromApi.filter(
                user => user.email.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
            );
            // se modifica el segundo array con los datos originales
            setUserFiltered(result);
        } else
        {
            // sino vuelvo a cargar la lista porque quedo seteado con la busqueda anterior que hizo el usuario
            setUserFiltered(userFromApi);
        }

    };

    // En el use effect si pasamos por parametro la variable users, se crea un loop eterno, 
    //porque en el primer renderizado detecta el cambio dentro de handleUsers funcion de "user",
    //entonces vuelve a ejecutar el useeffect infinitas veces
    useEffect(() =>
    {
        handleUsers();

    }, []);

    // llaas a filtrar la busqueda cada vez que el usuario cambia algo en el buscador y cada vez que se elimina
    //definitivamente un usuario en la lista original
    useEffect(() =>
    {
        FilterByCategory(valueForSearch);
    }, [valueForSearch, userFromApi]);




    const handleDelete = (userForDelete) =>
    {
        deleteUser(userForDelete);
        //filtro la lista original de usuarios por todos menos el id que elimino
        const filteredUsers = userFromApi.filter((us => us._id !== userForDelete));
        // cambio el estado de usuarios original por el construido en el paso anterior
        setUserFromApi(filteredUsers);
    };
    const handleEdit = (userEdited) =>
    {
        console.log("editar usuario" + JSON.stringify(userEdited));
        //agrego el id en la barra de busqueda
        navigate(`/users/${userEdited._id}`);
        // envio a este estado los datos del usuario a editar
        setUpdateUser(userEdited);
        // pongo el true el estado de edición
        setIsEdit(true);
        setEditModal(true);
    };
    const handleComments = (id) =>
    {
        navigate(`/comments/${id}`);

    };
    return (

        isLoading ? <div className='justify-content-center d-flex align-items-center height-100 '><Spinner animation="border" variant="info" size="lg" className="spinner-size" /></div> :
            userFromApi.length > 0 ?
                <>
                    <div className="container-fluid">
                        <Searcher setValueForSearch={setValueForSearch} />
                        <div className="row">
                            <div className="col-sm-12 table-responsive">
                                <table className="table table-striped text-center table-sm" >
                                    <thead>
                                        <tr>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Usuario</th>
                                            <th scope="col">Edad</th>
                                            <th scope="col">Comentar</th>
                                            <th scope="col">Editar</th>
                                            <th scope="col">Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {userFiltered && userFiltered.map((user) =>
                                            <React.Fragment key={user._id}>
                                                <tr key={user._id}>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.age}</td>
                                                    <td onClick={() => handleComments(user._id)} ><BiMessageRoundedAdd /></td>
                                                    <td onClick={() => handleEdit(user)} ><BiEdit /></td>
                                                    <td
                                                        onClick={() => handleDelete(user._id)}><BiTrash /></td>
                                                </tr>
                                            </React.Fragment>


                                        )}
                                        <FormAddOrEditUsers show={editModal} userFiltered={userFiltered} setUserFiltered={setUserFiltered} isEdit={isEdit} updateUser={updateUser} setShowToast={setShowToast} handleClose={handleClose} />
                                    </tbody>
                                </table >
                                <MessageTost handleCloseToast={handleCloseToast} showToast={showToast} setShowToast={setShowToast} isEdit={isEdit} />
                            </div>
                        </div>
                    </div>
                </>

                :
                <>
                    <h5 className='mt-2  text-center'>Todavía no hay usuarios registrados..</h5>
                </>

    );
};
