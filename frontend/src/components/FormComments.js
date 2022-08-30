import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { AddComment, EditComment } from '../services/commentService';
import { Moda_l } from './Modal';
import { useParams } from 'react-router-dom';
export const FormComments = ({ updateUser, modalComments, handleClose, commentsFromApi, setCommentsFromApi, isEdit, setValue, value }) =>
{
    const { id } = useParams();



    const handleAddOfComment = (e) =>
    {
        e.preventDefault();
        if (isEdit)
        {
            const newComment = {
                comment: value,
                _id: updateUser.id

            };
            console.log(newComment);
            // EditComment(newComment, id);
            // se va a guardar momentaneamente sin el id
            newComment.date = "Justo ahora";
        } else
        {
            const newComment = {
                comment: value,

            };
            AddComment(newComment, id);
            // se va a guardar momentaneamente sin el id
            newComment.date = "Justo ahora";
            const newArrayComments = [...commentsFromApi, newComment];
            setCommentsFromApi(newArrayComments);
            handleClose();

        }

    };

    return (
        <>
            <Moda_l show={modalComments} handleClose={handleClose} >
                <Form onSubmit={handleAddOfComment} className=" text-center">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{isEdit ? "Editar comentario" : "Nuevo Comentario"}</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder={value} onChange={e => setValue(e.target.value)} />
                    </Form.Group>
                    <button className="btn btn-dark mt-2 d-flex mx-auto  " type="submit" >
                        {isEdit ? "Editar " : "Agregar"}

                    </button>
                </Form>
            </Moda_l>
        </>
    );
};
