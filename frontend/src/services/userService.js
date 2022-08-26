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