import axios from "axios";

const urlBackend="https://usersmern.herokuapp.com"

export const getUsers = async () =>
{

  return axios.get(`${urlBackend}/users`);
};

export const deleteUser = (id) =>
{
  axios.delete(`${urlBackend}/users/${id}`);

};

export const addUser = (newUser) =>
{
  axios.post(`${urlBackend}/users/add`, newUser).then(res => console.log(res.data));

};

export const EditUser = (updateUser,id) =>

  {

    axios.post(`${urlBackend}/users/update/${id}` , updateUser)
      .then(res => console.log(res.data));

  };

 