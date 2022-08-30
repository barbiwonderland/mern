import React, { useCallback, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { deleteComment, GetUserComments } from "../services/commentService";
import { useParams } from 'react-router-dom';
import { Comments } from '../components/Comments';
import { FormComments } from '../components/FormComments';

export const UserComments = () =>
{
    const [commentsFromApi, setCommentsFromApi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalComments, setModalComments] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [updateUser, setUpdateUser] = useState([]);
    // value of input comments
    const [value, setValue] = useState('');

    let { id } = useParams();


    const handleClose = () =>
    {
        setModalComments(false);

    };
    useEffect(() =>
    {
        const handleComments = async () =>
        {

            await GetUserComments(id).then(res =>
            {
                setCommentsFromApi(res.data);
                console.log(res.data);
                setIsLoading(false);
            }
            );
        };
        handleComments();
        console.log("hola");
    }, []);

    return (

        isLoading ? <div className='justify-content-center d-flex align-items-center height-100 '><Spinner animation="border" variant="info" size="lg" className="spinner-size" /></div> :
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-">
                            <Button onClick={() => { setModalComments(true); setIsEdit(false); setValue(""); }} variant="dark" className='my-3 d-flex mx-auto' >Agregar comentario</Button>
                            <FormComments setValue={setValue} value={value} updateUser={updateUser} setUpdatedUser={setUpdateUser} isEdit={isEdit} setIsEdit={setIsEdit} commentsFromApi={commentsFromApi} setCommentsFromApi={setCommentsFromApi} modalComments={modalComments} handleClose={handleClose} />
                            {commentsFromApi.length > 0 ?
                                <>
                                    {commentsFromApi.map(({ comment, _id, date }) => (

                                        <Comments setValue={setValue} setUpdateUser={setUpdateUser} setIsEdit={setIsEdit} setModalComments={setModalComments} handleClose={handleClose} commentsFromApi={commentsFromApi} setCommentsFromApi={setCommentsFromApi} comments={comment} id={_id} createdAt={date} />
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
