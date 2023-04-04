import axios from "axios";
// pasar a variable de entorno
const urlBackend = "https://apimern.onrender.com"
console.log(urlBackend);
//const urlBackend="http://localhost:3001"
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
 return axios.post(`${urlBackend}/users/add`, newUser);

};

export const EditUser = (updateUser,id) =>

  {

    axios.post(`${urlBackend}/users/update/${id}` , updateUser)
      .then(res => console.log(res.data));

  };

 