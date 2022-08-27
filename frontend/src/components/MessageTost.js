import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


function MessageTost({ message })
{
    const [show, setShow] = useState(true);

    return (
        <Row>
            <Col xs={6}>
                <ToastContainer position="top-end">
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide >
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Mensaje:</strong>
                        </Toast.Header>
                        <Toast.Body>
                            {message}
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            </Col>

        </Row>
    );
}

export default MessageTost;