import React, { useState } from 'react';
import { Formik, Form, Field } from "formik";
import { addUser, EditUser } from '../services/userService';
import { useParams } from 'react-router-dom';
import { Moda_l } from './Modal';

export const FormAddOrEditUsers = ({ isEdit, updateUser, setUserFiltered, userFiltered, setShowToast, handleClose, show }) =>
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
    const validateUserEmail = value =>
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
    const validatename = value =>
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
            <Moda_l show={show} handleClose={handleClose} setShowToast={setShowToast}>
                <Formik

                    initialValues={isEdit ? {
                        email: updateUser.email, name: updateUser.name, age: updateUser.age
                    } : { email: "", name: "", age: "" }
                    }
                    onSubmit={(values, { setSubmitting }) =>
                    {
                        if (!isEdit)
                        {
                            console.log(values, "valores a agregar");
                            addUser(values).then(res => console.log(res.data, "hjhajahaka"));
                            setShowToast(true);
                            handleClose();

                        } else
                        {
                            EditUser(values, id);
                            // creo un array copia del original user traido de "ListUsers"
                            const usersEdited = userFiltered;
                            // Encuentro el indice del elemento de usuarios que quiero modificar
                            const objIndex = usersEdited.findIndex((obj => obj._id == id));
                            // Modifico directamente el elemento que quiero modificar a través del index
                            usersEdited[objIndex].email = values.email;
                            usersEdited[objIndex].name = values.name;
                            usersEdited[objIndex].age = values.age;
                            // Modifico el estado user con userEdited
                            setUserFiltered(usersEdited);
                            setShowToast(true);
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
                                        name="email"
                                        className="form-control "
                                        placeholder="example@example.com"
                                        validate={validateUserEmail}
                                    />
                                    {errors.email && touched.email && errorMessage(errors.email)}

                                    <Field
                                        className="form-control mt-2"
                                        type="text"
                                        placeholder="name"
                                        name="name"
                                        validate={validatename}
                                    />
                                    {errors.name && touched.name && errorMessage(errors.name)}
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
            </Moda_l>
        </>
    );
};
