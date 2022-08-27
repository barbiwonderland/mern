import React from 'react';
import axios from "axios";


export const getUsers = async () =>
{

  return axios.get('https://usersmern.herokuapp.com/users');
};

export const deleteUser = (id) =>
{
  axios.delete(`https://usersmern.herokuapp.com/users/${id}`);

};

export const addUser = (newUser) =>
{
  axios.post(`https://usersmern.herokuapp.com/users/add`, newUser).then(res => console.log(res.data));;

};

export const EditUser = (updateUser,id) =>

  {

    axios.post('https://usersmern.herokuapp.com/users/update/' + id, updateUser)
      .then(res => console.log(res.data));

  };

 