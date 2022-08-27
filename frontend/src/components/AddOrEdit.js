import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from "formik";
import { addUser, EditUser } from '../services/userService';
import { useParams } from 'react-router-dom';

export const AddOrEdit = ({ isEdit, updateUser }) =>
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
                    } else
                    {
                        EditUser(values,id);
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
                        <div className="col-sm-12">
                            <Form>
                                <div className="form-group">
                                    <Field
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        placeholder="Username"
                                        validate={validateNickName}
                                    />
                                    {errors.username && touched.username && errorMessage(errors.username)}
                                </div>
                                <div className="form-group">
                                    <Field
                                        className="form-control"
                                        type="text"
                                        placeholder="Nickname"
                                        name="nickname"
                                        validate={validateUserName}
                                    />
                                    {errors.nickname && touched.nickname && errorMessage(errors.nickname)}
                                </div>
                                <div className="form-group">
                                    <Field
                                        className="form-control"
                                        type="number"
                                        placeholder="Age"
                                        name="age"
                                        validate={validateAge}
                                    />
                                    {errors.age &&
                                        touched.age &&
                                        errorMessage(errors.age)}
                                </div>


                                <div className="form-group text-center">
                                    <button className="btn btn-dark" type="submit" >
                                        Submit
                                    </button>

                                </div>
                            </Form>
                        </div>
                    </div>
                )}
            </Formik>

        </>
    );
};
