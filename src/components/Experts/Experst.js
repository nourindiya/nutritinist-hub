import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Experts.css"

const Experst = () => {
    return (
        <Container className="expert-container pt-5 mb-5">
            <Row className="text-center justify-content-lg-center justify-content-sm-center mx-auto">
                <Col>
                    <p className="tittle fw-bold pt-5">Nutritionist Hub</p>
                    <p className="pp">
                        Proper nutrition is essential to healthy living and
                        overallwell-being. A nutritionist can play an important
                        in health by evaluating your diet and offering you personali
                        zed advice. Based on your health goals or medical needs, the
                        nutritionistcan make recommendations and put together
                        meal plans.</p>
                    <button className="btn-2">Appoint Now</button>
                </Col>
                <Col>
                    <img className="ex-img" src="https://image.freepik.com/free-vector/medical-good-team-hospital-staff-doctors-nurse-illustration_1284-53038.jpg" alt="" />
                </Col>
            </Row>
        </Container >
    );
};

export default Experst;