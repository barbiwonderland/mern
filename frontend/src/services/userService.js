import React from 'react';
import axios from "axios";


export const getUsers = async () =>
{

  return axios.get('http://localhost:8000/users');
};

export const deleteUser = (id) =>
{
  axios.delete(`http://localhost:8000/users/${id}`);

};

export const addUser = (newUser) =>
{
  axios.post(`http://localhost:8000/users/add`, newUser).then(res => console.log(res.data));;

};

export const EditUser = (updateUser,id) =>

  {

    axios.post('http://localhost:8000/users/update/' + id, updateUser)
      .then(res => console.log(res.data));

  };

 