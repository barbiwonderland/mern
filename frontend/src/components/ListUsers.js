import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from "../services/userService";
import { BiEdit, BiTrash } from "react-icons/bi";
export const ListUsers = () =>
{
    const [user, setUser] = useState([]);

    useEffect(() =>
    {
        getUsers().then(res => 
        {
            setUser(res.data);
        });

    }, []);
    return (
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
                            <td ><BiEdit /></td>
                            <td onClick={() => deleteUser(user._id)}><BiTrash /></td>
                        </tr>

                    </>
                )}


            </tbody>
        </table>
    );
};
