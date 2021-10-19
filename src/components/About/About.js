import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./About.css"
import { faHospitalAlt, faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="about-container">

            <div className="header">
                <Header></Header>
            </div>

            {/* into container */}
            <div className="about-body">
                <div className="about mx-auto text-center pt-5 pb-4 mt-4 ">
                    <h1>Nutritionist Hub</h1>
                    <p>We are here to help you with all type of health and nutrition related stuffs</p>
                    <p>-We Care About You-</p>
                    <div className="red" >
                        <FontAwesomeIcon icon={faHospitalAlt} />      <FontAwesomeIcon icon={faHospitalUser} />

                    </div>
                </div>


                {/* About */}
                <div className="row-container mt-5">
                    <Row className="row justify-content-lg-center justify-content-sm-center mx-auto">
                        <Col sm={4}>
                            <p className="tittle">We Provide Full Service At Every Step</p>
                            <p>Health is wealth.We care what we eat.Nutritionists can create diet plans, teach you about eating and help you address unhealthy eating behaviors. They specialize in helping you find foods you and your body love.Our priority in our paiten.We serve best to them.24/7 service available.</p>
                        </Col>
                        <Col className="imgg" sm={4}>
                            <img className="img-2" src="https://image.freepik.com/free-vector/medical-video-call-consultation-illustration_88138-415.jpg" alt="" srcset="" />
                        </Col>
                    </Row>
                </div>


                {/* Misson Container */}
                <div className="row-container mt-5">
                    <Row className="row justify-content-lg-center justify-content-sm-center mx-auto">
                        <Col className="img-3" sm={6}>
                            <img src="https://image.freepik.com/free-vector/medical-good-team-hospital-staff-doctors-nurse-illustration_1284-53038.jpg" alt="" srcset="" />
                        </Col>
                        <Col sm={4}>
                            <p className="tittle">Our Mission</p>
                            <p>we ar what we eat.We are here for giving the best advice and consult with you all.We serve 24/7 service every day.Everyday we help alot og people.Also aware all about health and nutrition.</p>
                        </Col>
                    </Row>
                </div>

                {/* cards container */}
                <div>
                    <Row className="row justify-content-lg-center justify-content-sm-center mx-auto">
                        <Col className="box text-center" sm={3}>
                            <p className="tittle">One hundred</p>
                            <p>Doctor</p>
                        </Col>
                        <Col className="box text-center" sm={3}>
                            <p className="tittle">Two hundred</p>
                            <p>Nurses</p>
                        </Col>
                        <Col className="box text-center" sm={3}>
                            <p className="tittle">Four Gigantic</p>
                            <p>Feild</p>
                        </Col>

                    </Row>
                </div>


                {/* card container 2 */}
                <div className="mt-5 mx-auto">
                    <p className="tittle">Departments</p>

                    <Row className=" justify-content-lg-center justify-content-sm-center mx-auto">
                        <Col className="service2 text-center mx-2" sm={3}>
                            <div>
                                <img className="card-img2" src="https://image.freepik.com/free-vector/detailed-bento-box-illustrated_23-2148879878.jpg" alt="" srcset="" />
                            </div>
                            <div className="card-body2">
                                <p className="pp">Diet Plan</p>
                            </div>
                        </Col>
                        <Col className="service2 text-center mx-2" sm={3}>
                            <div>
                                <img className="card-img2" src="https://image.freepik.com/free-vector/healthy-vs-unhealthy-food-flat-illustration_74855-18384.jpg" alt="" srcset="" />
                            </div>
                            <div className="card-body2">
                                <p className="pp">What to Eat?</p>
                            </div>
                        </Col>


                        <Col className="service2 text-center mx-2" sm={3}>
                            <div>
                                <img className="card-img2" src="https://image.freepik.com/free-vector/sick-boy-with-thermometer-bed-child-with-high-temperature-cartoon-character-fever-influenza-symptom-kid-with-cold-patient-relaxing-blanket_71593-655.jpg" alt="" srcset="" />
                            </div>
                            <div className="card-body2">
                                <p className="pp">Health Issue</p>
                            </div>
                        </Col>
                        <Col className="service2 text-center mx-2 " sm={3}>
                            <div>
                                <img className="card-img2" src="https://image.freepik.com/free-vector/cold-calling-abstract-concept-illustration_335657-4478.jpg" alt="" srcset="" />
                            </div>
                            <div className="card-body2">
                                <p className="pp">Consultation</p>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="text-center ">
                    <h1 className="tittle-1">For More</h1>
                    <p className="pp">Visit Us</p>
                    <a href="https://www.livestrong.com/article/284404-what-is-the-role-of-a-nutritionist/">www.nutrition.hub.com</a>
                </div>
            </div>


            <div className="footer">
                <Footer></Footer>
            </div>

        </div >
    );
};

export default About;