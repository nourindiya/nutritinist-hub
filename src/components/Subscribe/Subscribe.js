import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faMap, } from '@fortawesome/free-solid-svg-icons'
import "./Subscribe.css"


const Subscribe = () => {
    return (
        <Container className="sub-container" sm={1}>
            <Row className="text-center" >
                <Col xs={12} md={6}>
                    <p className="visit">Visit Us</p>
                    <p className="info">Gulshan 1,Dhaka ,Bangladesh</p>
                    <p>
                        <FontAwesomeIcon className="red mx-3" icon={faMap} />
                        <FontAwesomeIcon className="red" icon={faAddressBook} />
                    </p>
                </Col>


                <Col xs={12} md={6}>
                    <p className="visit">Appoint Now</p>
                    <label className="info" htmlFor="Email">Email : </label>  <input required type="email" name="" id="" />
                    <br />
                    <br />
                    <label className="info" htmlFor="phone">Phone : </label>  <input required type="phone" name="" id="" />
                </Col>
            </Row>
        </Container >
    );
};

export default Subscribe;