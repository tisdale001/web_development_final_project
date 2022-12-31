import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import {ToastContainer} from "react-bootstrap";

const ConfirmTransactionToast = ({setShow, show}) => {
    return (
        <Row>
            <Col xs={6}>
                <ToastContainer className="mt-5 me-5" position="middle-center">
                    <Toast onClose={() => setShow(false)} show={show} bg={"success"} delay={1500} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Transaction Confirmed</strong>
                        </Toast.Header>
                        <Toast.Body>Thanks for shopping at Vintage Vinyl!</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Col>
        </Row>
    );
}

export default ConfirmTransactionToast;
