import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AddOrEdit } from './AddOrEdit';

export function Moda_l({ showModal, handleClose, isEdit, updateUser, setUser, user, setShowToast, messageToast })
{


    return (
        <>
            <Modal centered keyboard show={showModal} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title className=' mx-auto'>{isEdit ? "Editar Usuario" : "Agregar usuario"} </Modal.Title>
                </Modal.Header>
                <Modal.Body> <AddOrEdit messageToast={messageToast} setShowToast={setShowToast} isEdit={isEdit} updateUser={updateUser} handleClose={handleClose} user={user} setUser={setUser} /></Modal.Body>
            </Modal>
        </>
    );
}

