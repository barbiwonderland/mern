import React from 'react';
import { Formik, Form, Field } from "formik";
import { addUser, EditUser } from '../services/userService';
import { useParams } from 'react-router-dom';

export const AddOrEdit = ({ isEdit, updateUser, handleClose, setUser, user }) =>
{

    const { id } = useParams();
    // Messages
    const required = "This field is required";
    const maxLength = "Your input exceed maximum length";

    // Error Component
    const errorMessage = error =>
    {
        return <div className="invalid-feedback">{error}</div>;
    };
    const validateUserName = value =>
    {
        let error;
        if (!value)
        {
            error = required;
        } else if (value.length > 12)
        {
            error = maxLength;
        }
        return error;
    };
    const validateNickName = value =>
    {
        let error;
        if (!value)
        {
            error = required;
        } else if (value.length > 12)
        {
            error = maxLength;
        }
        return error;
    };
    const validateAge = value =>
    {
        let error;
        if (value.length > 2)
        {
            error = maxLength;
        }
        return error;
    };


    return (
        <>

            <Formik

                initialValues={isEdit ? {
                    username: updateUser.username, nickname: updateUser.nickname, age: updateUser.age
                } : { username: "", nickname: "", age: "" }
                }
                onSubmit={(values, { setSubmitting }) =>
                {
                    if (!isEdit)
                    {
                        addUser(values);
                        handleClose();

                    } else
                    {
                        EditUser(values, id);
                        // creo un array copia del original user traido de "ListUsers"
                        const usersEdited = user;
                        // Encuentro el indice del elemento de usuarios que quiero modificar
                        const objIndex = usersEdited.findIndex((obj => obj._id == id));
                        // Modifico directamente el elemento que quiero modificar a través del index
                        usersEdited[objIndex].username = values.username;
                        usersEdited[objIndex].nickname = values.nickname;
                        usersEdited[objIndex].age = values.age;
                        // Modifico el estado user con userEdited
                        setUser(usersEdited);
                        handleClose();

                    }

                    setTimeout(() =>
                    {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ errors, touched, isValidating }) => (
                    <div className="container">
                        <div className=" input-group mb-3 d-flex  justify-content-center">
                            <Form className='w-75 '>
                                <Field
                                    type="text"
                                    name="username"
                                    className="form-control "
                                    placeholder="Username"
                                    validate={validateNickName}
                                />
                                {errors.username && touched.username && errorMessage(errors.username)}

                                <Field
                                    className="form-control mt-2"
                                    type="text"
                                    placeholder="Nickname"
                                    name="nickname"
                                    validate={validateUserName}
                                />
                                {errors.nickname && touched.nickname && errorMessage(errors.nickname)}
                                <Field
                                    className="form-control  mt-2"
                                    type="number"
                                    placeholder="Age"
                                    name="age"
                                    validate={validateAge}
                                />
                                {errors.age &&
                                    touched.age &&
                                    errorMessage(errors.age)}


                                <button className="btn btn-dark mt-2 d-flex mx-auto  " type="submit" >
                                    {isEdit ? "Editar" : "Agregar"}

                                </button>

                            </Form>
                        </div>
                    </div>
                )}
            </Formik>

        </>
    );
};
