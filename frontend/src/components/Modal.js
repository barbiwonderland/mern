import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AddOrEdit } from './AddOrEdit';

export function Moda_l({ show, handleClose, isEdit, updateUser })
{


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEdit ? "Editar Usuario" : "Agregar usuario"}</Modal.Title>
                </Modal.Header>
                <Modal.Body> <AddOrEdit isEdit={isEdit} updateUser={updateUser} /></Modal.Body>
            </Modal>
        </>
    );
}

