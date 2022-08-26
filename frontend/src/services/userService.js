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
export const editUser = (updateUser) =>
{
  axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, updateUser)
    .then(res => console.log(res.data));

};