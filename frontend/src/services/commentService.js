import axios from "axios";
const urlBackend = "https://apimern.onrender.com";
// const urlBackend = "http://localhost:3001"
export const getComments = async () =>
{
  return axios.get(`${urlBackend}/comments`);
};
// Le tengo que pasar el id cuando llame la función
export const GetUserComments = async (id) =>
{
  return axios.get(`${urlBackend}/comments/${id}`);
};

export const deleteComment = (id) =>
{
  axios.delete(`${urlBackend}/comments/${id}`);
};
export const addComment = async (newComment, id) =>
{
  // lo retorno porque quiero que me traiga algo
  return await axios.post(`${urlBackend}/comments/add/${id}`, newComment);
};

export const EditComment = (updateComment, id) =>
{
  // lo retorno porque quiero que me traiga algo

  return axios.post(`${urlBackend}/comments/update/${id}`, updateComment);
};
