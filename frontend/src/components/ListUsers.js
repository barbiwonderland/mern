import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from "../services/userService";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Moda_l } from './Modal';
import { useNavigate } from 'react-router-dom';
export const ListUsers = () =>
{
    const [user, setUser] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [updateUser, setUpdateUser] = useState([]);
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
        user.length > 0 ?
            <>

                <table key={user.id} className="table table-striped text-center">
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
                                <tr>
                                    {/* <th scope="row">{user._id}</th> */}
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
