import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
export function Moda_l({ children, show, handleClose })
{
    return (
        <>

            <Modal centered keyboard show={show} onHide={handleClose} >
                <Modal.Header closeButton >
                </Modal.Header>
                <Modal.Body> {children}</Modal.Body>
            </Modal>
        </>
    );
}

