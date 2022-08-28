import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from "../services/userService";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Moda_l } from './Modal';
import { useNavigate } from 'react-router-dom';
import { Spinner } from "react-bootstrap";
import { Searcher } from './Searcher';
import MessageTost from './MessageTost';
export const ListUsers = () =>
{
    const [userFromApi, setUserFromApi] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [updateUser, setUpdateUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showToast, setShowToast] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [valueForSearch, setValueForSearch] = useState("");
    const [userFiltered, setUserFiltered] = useState([]);
    let message = "";

    let navigate = useNavigate();


    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const handleCloseToast = () => setShowToast(false);

    const handleUsers = async () =>
    {
        await getUsers().then(res => 
        {
            setUserFromApi(res.data);
            setUserFiltered(res.data);
            setIsLoading(false);
        });
    };


    const FilterByCategory = (value) =>
    {
        // si el input no esta vacio..
        if (value !== '')
        {
            // filtro los elementos que incluyen el valor por nombre o nickname
            // paso los valores que ingresa el usuario a lowercase para unificar
            value = value.toLowerCase();
            const result = userFromApi.filter(
                user => user.username.toLowerCase().includes(value) || user.nickname.toLowerCase().includes(value)
            );
            // se modifica el segundo array con los datos originales
            setUserFiltered(result);
        } else
        {
            // sino vuelvo a cargar la lista 
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

    useEffect(() =>
    {
        FilterByCategory(valueForSearch);
    }, [valueForSearch, userFromApi]);




    const handleDelete = (userForDelete) =>
    {
        deleteUser(userForDelete);
        const filteredUsers = userFromApi.filter((us => us._id !== userForDelete));
        setUserFromApi(filteredUsers);
    };
    const handleEdit = (userEdited) =>
    {
        console.log("editar usuario" + JSON.stringify(userEdited));
        navigate(`/users/${userEdited._id}`);
        setUpdateUser(userEdited);
        setIsEdit(true);
        handleShow();
    };
    return (

        isLoading ? <div className='justify-content-center d-flex align-items-center height-100 '><Spinner animation="border" variant="info" size="lg" className="spinner-size" /></div> :
            userFromApi.length > 0 ?
                <>
                    <Searcher setValueForSearch={setValueForSearch} />
                    <table className="table table-striped text-center" >
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>

                            {userFiltered && userFiltered.map((user) =>
                                <React.Fragment key={user._id}>
                                    <tr key={user._id}>
                                        <td>{user.nickname}</td>
                                        <td>{user.username}</td>
                                        <td>{user.age}</td>
                                        <td onClick={() => handleEdit(user)} ><BiEdit /></td>
                                        <td
                                            onClick={() => handleDelete(user._id)}><BiTrash /></td>
                                    </tr>
                                </React.Fragment>


                            )}

                            <Moda_l isEdit={isEdit} showModal={showModal} handleClose={handleClose} showToast={showToast} setShowToast={setShowToast} updateUser={updateUser} setUser={setUserFromApi} user={userFromApi} />
                        </tbody>
                    </table >
                    <MessageTost handleCloseToast={handleCloseToast} showToast={showToast} setShowToast={setShowToast} isEdit={isEdit} />

                </>

                :
                <>
                    <h5 className='mt-2  text-center'>Todavía no hay usuarios registrados..</h5>
                </>

    );
};
