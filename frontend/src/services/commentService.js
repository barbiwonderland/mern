import axios from "axios";
const urlBackend = "https://usersmern.herokuapp.com";

export const getComments = async () =>
{

  return axios.get(`${urlBackend}/comments`);
};
// Le tengo que pasar el id cuando llame la función
export const getUserComments = async (id) =>
{

  return axios.get(`${urlBackend}/comments/${id}`);
};

export const deleteComment = (id) =>
{
  axios.delete(`${urlBackend}/comments/${id}`);

};
export const AddComment = (newComment,id) =>

  {
    axios.post(`${urlBackend}/comments/add/${id}`, newComment).then(res => console.log(res.data));

  };

  export const EditComment = (updateComment, id) =>
{

    axios.post(`${urlBackend}/comments/update/${id}`, updateComment)
      .then(res => console.log(res.data));

  };

