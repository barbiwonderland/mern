import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


function MessageTost({ showToast, handleCloseToast, isEdit })
{

    return (
        <Row>
            <Col xs={6}>
                <ToastContainer position="top-end">
                    <Toast className="text-secondary " bg="light" onClose={handleCloseToast} show={showToast} delay={3000} autohide  >
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Atención:</strong>
                            <small>Justo ahora</small>
                        </Toast.Header>
                        <Toast.Body>
                            {
                                isEdit ? "Usuario editado correctamente" : "Usuario agregado correctamente"
                            }
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            </Col>

        </Row>
    );
}

export default MessageTost;