import React, { useEffect, useState } from 'react';
import home from "./home.css";
import { Moda_l } from '../components/Modal';
import MessageTost from '../components/MessageTost';
import { FormAddOrEditUsers } from '../components/FormAddOrEditUsers';
export const Home = () =>
{
    const [addModal, setAddModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    let toastMessage = "";
    const handleClose = () => setAddModal(false);
    const handleShow = () => setAddModal(true);
    const handleCloseToast = () => setShowToast(false);

    return (
        <>
            <div className="backgroundHome text-center ">
                <h3 className='text-center pt-5'> <span className='text-white border-bottom  border-2'>¡Bienvenido!</span></h3>
                <button onClick={handleShow} type="button" className=" mt-5 btn btn-dark" >
                    Agregar usuario
                </button>
            </div>

            <FormAddOrEditUsers handleClose={handleClose} show={addModal} handleCloseToast={handleCloseToast} setShowToast={setShowToast} />

            <MessageTost handleCloseToast={handleCloseToast} showToast={showToast} toastMessage="Usuario agregado correctamente" />
        </>
    );
};
