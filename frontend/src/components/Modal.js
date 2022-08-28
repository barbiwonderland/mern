import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AddOrEdit } from './AddOrEdit';

export function Moda_l({ show, handleClose, isEdit, updateUser, setUser, user })
{


    return (
        <>
            <Modal centered keyboard show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title className=' mx-auto'>{isEdit ? "Editar Usuario" : "Agregar usuario"} </Modal.Title>
                </Modal.Header>
                <Modal.Body> <AddOrEdit isEdit={isEdit} updateUser={updateUser} handleClose={handleClose} user={user} setUser={setUser} /></Modal.Body>
            </Modal>
        </>
    );
}

