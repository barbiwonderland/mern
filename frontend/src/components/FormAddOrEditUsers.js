import React, { useState } from "react"
import { Formik, Form, Field } from "formik"
import { addUser, EditUser } from "../services/userService"
import { useParams } from "react-router-dom"
import { Moda_l } from "./Modal"
import { useDispatch, useSelector } from "react-redux"
import { addUserRedux, editUserRedux } from "../redux/reducers/userSlice"

export const FormAddOrEditUsers = ({
  isEdit,
  updateUser,
  setShowToast,
  handleClose,
  show,
}) => {
  const { id } = useParams()
  // Messages
  const required = "This field is required"
  const maxLength = "Your input exceed maximum length"
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.users)
  if (isEdit) {
    var actualUser = users.filter((user) => user._id == id)
    actualUser = actualUser[0]
  }
  return (
    <>
      <Moda_l show={show} handleClose={handleClose} setShowToast={setShowToast}>
        <Formik
          initialValues={
            isEdit
              ? {
                  email: actualUser.email,
                  name: actualUser.name,
                  age: actualUser.age,
                }
              : { email: "", name: "", age: "" }
          }
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500))
            if (!isEdit) {
              console.log(values, "valores a agregar")
              addUser(values).then((res) => console.log(res.data, "hjhajahaka"))
              dispatch(addUserRedux(values))
              setShowToast(true)
              handleClose()
            } else {
              EditUser(values, id)
              dispatch(editUserRedux({ user: values, id: id }))
              setShowToast(true)
              handleClose()
            }
          }}
          validator={() => ({})}
        >
          <div className="container">
            <div className=" input-group mb-3 d-flex  justify-content-center">
              <Form className="w-75 ">
                <Field
                  type="text"
                  name="email"
                  className="form-control "
                  placeholder="example@example.com"
                />

                <Field
                  className="form-control mt-2"
                  type="text"
                  placeholder="name"
                  name="name"
                />

                <Field
                  className="form-control  mt-2"
                  type="number"
                  placeholder="Age"
                  name="age"
                />

                <button
                  className="btn btn-dark mt-2 d-flex mx-auto  "
                  type="submit"
                >
                  {isEdit ? "Editar" : "Agregar"}
                </button>
              </Form>
            </div>
          </div>
        </Formik>
      </Moda_l>
    </>
  )
}
