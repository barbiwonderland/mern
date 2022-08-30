import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
export const Comments = ({ id, comment, createdAt }) =>
{

    return (
        <Card>
            <Card.Header>Comentario {id}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {comment}
                    </p>
                    <footer className="blockquote-footer">
                        <cite title="Source Title">{(createdAt)}</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};
