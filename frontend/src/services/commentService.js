import axios from "axios";

const urlBackend="httpCommentsmern.herokuapp.com"

export const getComments = async () =>
{

  return axios.get(`${urlBackend}/comments`);
};

export const deleteComment = (id) =>
{
  axios.delete(`${urlBackend}/comments/${id}`);

};

export const addComment = (newComment,idUser) =>
{
  axios.post(`${urlBackend}/comments/add/${idUser}`, newComment).then(res => console.log(res.data));

};

export const EditComment = (updateComment,id) =>

  {

    axios.post(`${urlBackend}/comments/update/${id}` , updateComment)
      .then(res => console.log(res.data));

  };

 