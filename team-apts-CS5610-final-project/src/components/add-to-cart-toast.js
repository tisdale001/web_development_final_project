import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import {ToastContainer} from "react-bootstrap";

const AddToCartToast = ({thumb, setShow, show}) => {
    return (
        <Row>
            <Col xs={6}>
                <ToastContainer className="mt-5 me-5" position="top-end">
                    <Toast onClose={() => setShow(false)} show={show} bg={"success"} delay={1500} autohide>
                        <Toast.Header>
                            <img
                                style={{width:"30px", height: "30px"}}
                                src={thumb}
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Vintage Vinyl</strong>
                        </Toast.Header>
                        <Toast.Body className="text-white">Successfully added to your cart!</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Col>
        </Row>
    );
}

export default AddToCartToast;