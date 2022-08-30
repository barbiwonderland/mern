import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { BiTrash, BiPencil } from "react-icons/bi";
import { deleteComment } from '../services/commentService';
export const Comments = ({ id, comments, createdAt, setCommentsFromApi, commentsFromApi, setModalComments, setIsEdit, setValue, setUpdateUser }) =>
{

    const handleDelete = (id) =>
    {
        deleteComment(id);
        const commentfiltered = commentsFromApi.filter((comment) => comment._id !== id);
        console.log(commentfiltered);
        setCommentsFromApi(commentfiltered);
    };
    const handleEdit = (id, comment) =>
    {
        setIsEdit(true);
        setValue(comments);
        setUpdateUser({ id: id, comment: comment });
        // abro el form modal para editar
        setModalComments(true);




    };
    return (
        <Card>
            <Card.Header> <div className='d-flex justify-content-end gap-2'>
                <BiPencil onClick={() => handleEdit(id, comments)} />
                <BiTrash onClick={() => handleDelete(id)} />
            </div>
            </Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {comments}
                    </p>
                    <footer className="blockquote-footer">
                        <cite title="Source Title">{(createdAt)}</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};
