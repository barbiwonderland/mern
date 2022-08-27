import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AddOrEdit } from './AddOrEdit';

export function Moda_l({ show, handleClose, isEdit, updateUser })
{


    return (
        <>
            <Modal centered onEscapeKeyDown show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title className=' mx-auto'>{isEdit ? "Editar Usuario" : "Agregar usuario"} </Modal.Title>
                </Modal.Header>
                <Modal.Body> <AddOrEdit isEdit={isEdit} updateUser={updateUser} handleClose={handleClose} /></Modal.Body>
            </Modal>
        </>
    );
}

