import React, { useEffect, useState } from 'react';
import home from "./home.css";
import { Moda_l } from '../components/Modal';
import MessageTost from '../components/MessageTost';
export const Home = () =>
{
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    let toastMessage = "";
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const handleCloseToast = () => setShowToast(false);

    return (
        <>
            <div className="backgroundHome text-center ">
                <h3 className='text-center pt-5'> <span className='text-white border-bottom  border-2'>¡Bienvenido!</span></h3>
                <button onClick={handleShow} type="button" className=" mt-5 btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                    Agregar usuario
                </button>
            </div>
            <Moda_l showModal={showModal} handleClose={handleClose} showToast={showToast} toastMessage={toastMessage} setShowToast={setShowToast} />
            <MessageTost handleCloseToast={handleCloseToast} showToast={showToast} toastMessage="Usuario agregado correctamente" />
        </>
    );
};
