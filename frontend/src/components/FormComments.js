import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { AddComment } from '../services/commentService';
import { Moda_l } from './Modal';
import { useParams } from 'react-router-dom';
export const FormComments = ({ modalComments, handleClose, SetNewComment }) =>
{
    const [comment, setComment] = useState('');
    const { id } = useParams();
    const handleAddOfComment = (e) =>
    {
        e.preventDefault();
        AddComment({ comment: comment }, id);
        SetNewComment(true);
        handleClose();
    };

    return (
        <>
            <Moda_l show={modalComments} handleClose={handleClose} >
                <Form onSubmit={handleAddOfComment} className=" text-center">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Nuevo Comentario</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={e => setComment(e.target.value)} />
                    </Form.Group>
                    <button className="btn btn-dark mt-2 d-flex mx-auto  " type="submit" >
                        Agregar Comentario

                    </button>
                </Form>
            </Moda_l>
        </>
    );
};
