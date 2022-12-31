import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CommentsContainer } from "../components/CommentsContainer";
import { FormComments } from "../components/FormComments";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommentsById } from "../redux/reducers/commentSlice";

export const UserComments = () =>
{
  const [commentsFromApi, setCommentsFromApi] = useState([]);
  const [modalComments, setModalComments] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  // value of input comments
  const [inputOfCommentsValue, setInputOfCommentsValue] = useState("");
  const { comments, loading } = useSelector((state) => state.comments);
  let { id } = useParams();
  const dispatch = useDispatch();
  const handleClose = (newComment) =>
  {
    console.log(newComment);
    setModalComments(false);
  };
  useEffect(() =>
  {
    // Me traigo todos los comentarios de la api en el primer renderizado
    const handleComments = async () =>
    {
      dispatch(fetchCommentsById(id));
    };
    handleComments();
  }, []);
  return loading ? (
    <div className="justify-content-center d-flex align-items-center height-100 ">
      <Spinner
        animation="border"
        variant="info"
        size="lg"
        className="spinner-size"
      />
    </div>
  ) : (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-">
            <Button
              onClick={() =>
              {
                setModalComments(true);
                setIsEdit(false);
                setInputOfCommentsValue("");
              }}
              variant="dark"
              className="my-3 d-flex mx-auto"
            >
              Agregar comentario
            </Button>
            {/* /* /*Formulario Modal para editar comentarios */}
            <FormComments
              setInputOfCommentsValue={setInputOfCommentsValue}
              inputOfCommentsValue={inputOfCommentsValue}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              commentsFromApi={commentsFromApi}
              setCommentsFromApi={setCommentsFromApi}
              modalComments={modalComments}
              handleClose={handleClose}
            />
            {comments.length > 0 ? (
              <>
                {comments.map(

                  ({ comment, _id, createdAt }) =>
                  {
                    console.log(createdAt);
                    let fecha = new Date(createdAt);
                    console.log(fecha, "fecha1");
                    fecha = fecha.toLocaleString('es-AR');
                    console.log(fecha, "fecha2");
                    return (
                      <CommentsContainer
                        setInputOfCommentsValue={setInputOfCommentsValue}
                        setIsEdit={setIsEdit}
                        setModalComments={setModalComments}
                        commentsFromApi={commentsFromApi}
                        setCommentsFromApi={setCommentsFromApi}
                        userComment={comment}
                        commentId={_id}
                        createdAt={fecha}
                      />);
                  })}
              </>
            ) : (
              <>
                <h5 className="mt-2  text-center">
                  Todavía no hay comentarios registrados..
                </h5>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
