import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { addComment, EditComment } from '../services/commentService';
import { Moda_l } from './Modal';
import { useNavigate, useParams } from 'react-router-dom';
export const FormComments = ({ modalComments, handleClose, commentsFromApi,
    setCommentsFromApi, isEdit, setInputOfCommentsValue, inputOfCommentsValue }) =>
{
    console.log(commentsFromApi, "comentarios");
    const { id } = useParams();
    let navigate = useNavigate();
    const [commentUpdatedFromBd, setCommentUpdatedFromBd] = useState("");
    useEffect(() =>
    {
    }, [commentUpdatedFromBd]);
    const handleAddOrEdit = (e, commentsFromApi, setCommentsFromApi) =>
    {

        e.preventDefault();
        if (isEdit)
        {
            const newComment = {
                comment: inputOfCommentsValue,
            };
            console.log(newComment, "Nuevo comentario");
            EditComment(newComment, id).then((res) => console.log(res.data));
            handleClose();

        } else
        {
            let newComment = {
                comment: inputOfCommentsValue,
                id: Date.now()
            };
            addComment(newComment, id).then((res) =>
            {
                setCommentUpdatedFromBd(res.data);

            });

            handleClose(newComment);
            console.log(commentsFromApi);
            console.log(...commentsFromApi);
            setCommentsFromApi(...commentsFromApi, newComment);
            console.log(commentsFromApi);
        }

    };

    return (
        <>
            <Moda_l show={modalComments} handleClose={handleClose} >
                <Form onSubmit={(e) => handleAddOrEdit(e, commentsFromApi, setCommentsFromApi)} className=" text-center">
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
