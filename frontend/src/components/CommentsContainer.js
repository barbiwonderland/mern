import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { BiTrash, BiPencil } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { deleteUserRedux } from "../redux/reducers/userSlice";
import { deleteComment } from "../services/commentService";
import { useDispatch } from "react-redux";
import { deletecommentRedux } from "../redux/reducers/commentSlice";
export const CommentsContainer = ({
  commentId,
  userComment,
  createdAt,
  setCommentsFromApi,
  commentsFromApi,
  setModalComments,
  setIsEdit,
  setInputOfCommentsValue,
}) =>
{
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (commentId) =>
  {
    deleteComment(commentId);
    dispatch(deletecommentRedux(commentId));
    // eliminar en la base de datos
  };
  const handleEdit = (commentId, userComment) =>
  {
    navigate(`/comments/update/${commentId}`);
    setIsEdit(true);
    setInputOfCommentsValue(userComment);
    // abro el form modal para editar
    setModalComments(true);
  };

  return (
    <Card>
      <Card.Header>
        {" "}
        <div className="d-flex justify-content-end gap-2">
          <BiPencil onClick={() => handleEdit(commentId, userComment)} />
          <BiTrash onClick={() => handleDelete(commentId)} />
        </div>
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{userComment}</p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{createdAt}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
