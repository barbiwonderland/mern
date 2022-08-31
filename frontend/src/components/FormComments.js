import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { addComment, EditComment } from '../services/commentService';
import { Moda_l } from './Modal';
import { useNavigate, useParams } from 'react-router-dom';
export const FormComments = ({ modalComments, handleClose, commentsFromApi,
    setCommentsFromApi, isEdit, setInputOfCommentsValue, inputOfCommentsValue }) =>
{
    const { id } = useParams();
    let navigate = useNavigate();
    const [commentUpdatedFromBd, setCommentUpdatedFromBd] = useState("pepe");

    const handleAddOrEdit = (e) =>
    {

        e.preventDefault();
        if (isEdit)
        {
            const newComment = {
                comment: inputOfCommentsValue,
            };
            console.log(newComment);
            EditComment(newComment, id).then((res) => console.log(res.data));
            navigate(-1);
            //agregar navegar url anterior
            handleClose();
        } else
        {
            let newComment = {
                comment: inputOfCommentsValue,

            };
            addComment(newComment, id).then((res) =>
            {
                setCommentUpdatedFromBd(res.data);

            });
            // se va a guardar momentaneamente sin el id
            handleClose();

        }

    };

    return (
        <>
            <Moda_l show={modalComments} handleClose={handleClose} >
                <Form onSubmit={handleAddOrEdit} className=" text-center">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{isEdit ? "Editar comentario" : "Nuevo Comentario"}</Form.Label>
                        <Form.Control as="textarea" rows={3} value={inputOfCommentsValue} onChange={e => setInputOfCommentsValue(e.target.value)} />
                    </Form.Group>
                    <button className="btn btn-dark mt-2 d-flex mx-auto  " type="submit" >
                        {isEdit ? "Editar " : "Agregar"}

                    </button>
                </Form>
            </Moda_l>
        </>
    );
};
