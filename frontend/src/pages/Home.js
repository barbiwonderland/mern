import React, { useEffect, useState } from 'react';
import home from "./home.css";
import { Moda_l } from '../components/Modal';
export const Home = () =>
{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="backgroundHome text-center ">
                <h3 className='text-center text-white border-bottom pt-3'> <span>¡Bienvenido!</span></h3>
                <button onClick={handleShow} type="button" className=" mt-5 btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                    Agregar usuario
                </button>
            </div>
            <Moda_l show={show} handleClose={handleClose} />

        </>
    );
};
