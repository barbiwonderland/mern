import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { addComment, EditComment } from "../services/commentService";
import { Moda_l } from "./Modal";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import
{
    addCommentRedux,
    editCommentRedux,
} from "../redux/reducers/commentSlice";
export const FormComments = ({
    modalComments,
    handleClose,
    commentsFromApi,
    setCommentsFromApi,
    isEdit,
    setInputOfCommentsValue,
    inputOfCommentsValue,
}) =>
{
    console.log(commentsFromApi, "comentarios");
    const { id } = useParams();
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [commentUpdatedFromBd, setCommentUpdatedFromBd] = useState("");
    useEffect(() => { }, [commentUpdatedFromBd]);
    const handleAddOrEdit = (e, commentsFromApi, setCommentsFromApi) =>
    {
        e.preventDefault();
        if (isEdit)
        {
            const newComment = {
                comment: inputOfCommentsValue,
                _id: id,
            };
            EditComment(newComment, id).then((res) => 
            {
                console.log(res.data);
                dispatch(editCommentRedux(res.data));
            }
            );

            handleClose();
        } else
        {
            let newComment = {
                comment: inputOfCommentsValue,
                date: new Date(),
                userId: Date.now(),
            };
            addComment(newComment, id).then((res) =>
            {
                console.log(res.data, 'informacion desde api');
                let newData = res.data;
                // cuando agrego nuevo comentario, espero la rta de la api y guardo el nuevo comentario dentro del estado de redux luego lo paso a hora arg en component de comentarios
                dispatch(addCommentRedux(newData));
            });

            handleClose(newComment);
        }
    };

    return (
        <>
            <Moda_l show={modalComments} handleClose={handleClose}>
                <Form
                    onSubmit={(e) =>
                        handleAddOrEdit(e, commentsFromApi, setCommentsFromApi)
                    }
                    className=" text-center"
                >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>
                            {isEdit ? "Editar comentario" : "Nuevo Comentario"}
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={inputOfCommentsValue}
                            onChange={(e) => setInputOfCommentsValue(e.target.value)}
                        />
                    </Form.Group>
                    <button className="btn btn-dark mt-2 d-flex mx-auto  " type="submit">
                        {isEdit ? "Editar " : "Agregar"}
                    </button>
                </Form>
            </Moda_l>
        </>
    );
};
