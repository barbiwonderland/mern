import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from "../services/userService";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Moda_l } from './Modal';
import { useNavigate } from 'react-router-dom';
import { Spinner } from "react-bootstrap";
export const ListUsers = () =>
{
    const [user, setUser] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [updateUser, setUpdateUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let navigate = useNavigate();
    useEffect(() =>
    {
        getUsers().then(res => 
        {
            setUser(res.data);
        });


    }, [user]);

    const handleDelete = (userdeleted) =>
    {
        deleteUser(userdeleted);
        const filteredUsers = user.filter((us => us._id !== userdeleted));
        setUser(filteredUsers);
    };
    const handleEdit = (userEdited) =>
    {
        console.log("editar usuario" + userEdited);
        navigate(`/users/${userEdited._id}`);
        setUpdateUser(userEdited);
        setIsEdit(true);
        handleShow();


    };
    return (

        isLoading ? <div className='justify-content-center d-flex align-items-center height-100 '><Spinner animation="border" variant="info" size="lg" className="spinner-size" /></div> :
            user.length > 0 ?
                <>

                    <table className="table table-striped text-center">
                        <thead>
                            <tr>
                                {/* <th scope="col">#</th> */}
                                <th scope="col">Nombre</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>

                            {user && user.map((user) =>
                                <>
                                    <tr key={user._id}>
                                        <td>{user.nickname}</td>
                                        <td>{user.username}</td>
                                        <td>{user.age}</td>
                                        <td onClick={() => handleEdit(user)} ><BiEdit /></td>
                                        <td
                                            onClick={() => handleDelete(user._id)}><BiTrash /></td>
                                    </tr>
                                </>


                            )}

                            <Moda_l isEdit={isEdit} show={show} handleClose={handleClose} updateUser={updateUser} />
                        </tbody>
                    </table >

                </>

                :
                <>
                    <h5 className='mt-2  text-center'>Todavía no hay usuarios registrados..</h5>
                </>
    );
};
