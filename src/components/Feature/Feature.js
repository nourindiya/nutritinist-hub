import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Feature.css"
const Feature = () => {
    return (
        <div>
            <div className="header">
                <Header></Header>
            </div>
            <div className="feature-body">

                <Container className="">
                    <Row className="text-center mx-auto mt-3 justify-content-md-center">
                        <Col className="mb-3">
                            <img className="img4" src="https://image.freepik.com/free-vector/hand-drawn-hospital-reception-scene-with-people-wearing-face-masks_23-2148813989.jpg" alt="" srcset="" />
                        </Col>
                        <Col className="mb-3">
                            <img className="img4" src="https://image.freepik.com/free-vector/doctor-patient-desk-hospital-office-clinic-visit-exam-meeting-with-physician-conversation-with-medic-about-diagnosis-results_284092-936.jpg" alt="" srcset="" />
                        </Col>
                        <Col className="mb-3">
                            <img className="img4" src="https://image.freepik.com/free-vector/hospital-reception-scene-with-face-masks_52683-55277.jpg" alt="" />
                        </Col>
                    </Row>
                </Container>

                <div>
                    <h1 className="tittle">Our Team</h1>
                    <Row className="tt mx-auto">
                        <Col className="t mb-3 mx-5" xs={6} md={3}>
                            <div>
                                <img className="team" src="https://image.freepik.com/free-photo/portrait-confident-senior-man-wearing-glasses_1262-1875.jpg?1" alt="" srcset="" />
                            </div>
                            <div>
                                <h1 className="tittle">DR. Brilirs</h1>
                                <p className="pp text-center">Chairman of Nutritionist Hub</p>
                            </div>
                        </Col>
                        <Col className="t mb-3 mx-3" xs={6} md={3}>
                            <div>
                                <img className="team" src="https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg" alt="" srcset="" />
                            </div>
                            <div>
                                <h1 className="tittle">DR. Brilirs</h1>
                                <p className="pp text-center">Vice Pesident of Nutritionist Hub</p>
                            </div>
                        </Col>
                        <Col className="t mb-3  mx-3" xs={6} md={3}>
                            <div>
                                <img className="team" src="https://image.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?1" alt="" srcset="" />
                            </div>
                            <div>
                                <h1 className="tittle">DR. Brilirs</h1>
                                <p className="pp text-center">Advisor & Senior Sugent Nutritionist Hub</p>
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <Row className="text-center mx-auto imp">
                            <Col>
                                <img className="img-5" src="https://image.freepik.com/free-vector/doctors-nurses-face-masks_107791-5481.jpg" alt="" srcset="" />
                            </Col>
                            <Col className="bg-2 mb-3 pt-3 pb-3">
                                <h1 className="tittle">Why Nutrition Important ?</h1>
                                <p className="pp">A healthy diet and proper nutrition is also required for heart health. It helps maintain healthy cholesterol levels, helps balance your blood sugar levels, and keeps your blood pressure healthy too.Nutrition is crucial for the growth and development of children and adolescents. A child’s body uses nutrients to build strong bones, grow tall, and expand cognitive capacity. Proper nutrition helps children prevent and fight off illness. It gives them energy and allows them to focus and learn in school.</p>
                                <div className="text-center">
                                    <button className="btn-2">Learn More</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>

            <div className="footer">
                <Footer></Footer>
            </div>

        </div >
    );
};

export default Feature;