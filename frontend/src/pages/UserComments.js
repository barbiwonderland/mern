import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { addComment, getUserComments } from "../services/commentService";
import { useParams } from 'react-router-dom';
import { Comments } from '../components/Comments';
import { FormComments } from '../components/FormComments';

export const UserComments = () =>
{
    const [commentsFromApi, setCommentsFromApi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalComments, setModalComments] = useState(false);
    const [newComment, SetNewComment] = useState(false);
    const { id } = useParams();

    const handleComments = async () =>
    {

        await getUserComments(id).then(res =>
        {
            setCommentsFromApi(res.data);
            console.log(res.data);
            setIsLoading(false);
        }
        );
    };

    const handleClose = () =>
    {
        setModalComments(false);
    };

    useEffect(() =>
    {
        handleComments();
    }, [newComment]);

    return (

        isLoading ? <div className='justify-content-center d-flex align-items-center height-100 '><Spinner animation="border" variant="info" size="lg" className="spinner-size" /></div> :
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-">
                            <Button onClick={() => setModalComments(true)} variant="dark" className='my-3 d-flex mx-auto' >Agregar comentario</Button>
                            <FormComments SetNewComment={SetNewComment} modalComments={modalComments} handleClose={handleClose} />
                            {commentsFromApi.length > 0 ?
                                <>
                                    {commentsFromApi.map(({ comment, _id, createdAt }) => (

                                        <Comments comment={comment} id={_id} createdAt={createdAt} />
                                    ))}
                                </>
                                :
                                <>
                                    <h5 className='mt-2  text-center'>Todavía no hay comentarios registrados..</h5>
                                </>}

                        </div>
                    </div>
                </div>
            </>
    );

};
