import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { getComments } from "../services/commentService";
export const Comments = () =>
{
    const [commentsFromApi, setCommentsFromApi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleComments = async () =>
    {
        await getComments().then(res => 
        {
            setCommentsFromApi(res.data);
            console.log(res.data);
            setIsLoading(false);
        });
    };

    useEffect(() =>
    {
        handleComments();
    }, []);
    return (

        isLoading ? <div className='justify-content-center d-flex align-items-center height-100 '><Spinner animation="border" variant="info" size="lg" className="spinner-size" /></div> :

            commentsFromApi.length > 0 ?
                commentsFromApi.map((comment) => (

                    <Card>
                        <Card.Header>Comentario {comment._id}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {comment.comment}
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">{(comment.createdAt)}</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                ))

                :
                <>
                    <h5 className='mt-2  text-center'>Todavía no hay usuarios registrados..</h5>
                </>

    );
};
