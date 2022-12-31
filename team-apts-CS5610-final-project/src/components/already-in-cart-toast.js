import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import {ToastContainer} from "react-bootstrap";

const AlreadyInCartToast = ({thumb, setShow, show}) => {
    return (
        <Row>
            <Col xs={6}>
                <ToastContainer style={{zIndex: 9999}} className="mt-5 me-5" position="top-end">
                    <Toast bg={"danger"} onClose={() => setShow(false)} show={show}  delay={1500} autohide>
                        <Toast.Header>
                            <img
                                style={{width:"30px", height: "30px"}}
                                src={thumb}
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Vintage Vinyl</strong>
                        </Toast.Header>
                        <Toast.Body>You've already added this album to your cart!</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Col>
        </Row>
    );
}

export default AlreadyInCartToast;
