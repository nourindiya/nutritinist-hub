import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { faMailBulk, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact-container">

            {/* Header container */}
            <div className="header">
                <Header></Header>
            </div>


            {/* Contact Container */}
            <div className="contact-body">

                <div className="about2 mx-auto text-center pt-5 pb-4 mt-4 ">
                    <h1 className="tittle">Contact Us</h1>
                    <p className="pp">We are available 24/7</p>
                    <p className="pp">Ambulace Service</p>
                    <p className="pp">Doctors Appointment</p>
                </div>


                <div className="form-container mx-auto text-center">
                    <div className="form-img">
                        <img src="https://image.freepik.com/free-vector/travel-road-street-map-with-location-pin-symbol-vector-illustration_1284-2005.jpg" alt="" srcset="" />
                    </div>
                    <div className="mx-auto">
                        <Form>
                            <label>Name :</label> <br />
                            <input className="input2" type="text" name="name" placeholder="Enter Name" id="" />
                            <br />
                            <br />

                            <label>Email :</label> <br />
                            <input className="input2" type="email" name="email" placeholder="Enter Email" id="" />
                            <br />
                            <br />

                            <label>Number :</label> <br />
                            <input className="input2" type="number" name="number" placeholder="Enter Number" id="" />
                            <br />
                            <br />

                            <label>Subject :</label> <br />
                            <input className="input2" type="subject" name="sunject" placeholder="Subject" id="" />
                            <br />
                            <br />

                            <label>Question :</label> <br />
                            <textarea className="bg-3" name="" id="" cols="65" rows="5"></textarea>
                            <br />
                        </Form>
                    </div>
                </div>
                <div>
                    <div className="mx-auto">
                        <Row className="row justify-content-lg-center justify-content-sm-center mx-auto mt-5">
                            <Col className="text-center" sm={3}>
                                <p className="tittle"> <FontAwesomeIcon className="red" icon={faMap} /> Gulsan 1,Dhaka,Bangladesh </p>
                                <p>Office</p>
                            </Col>
                            <Col className=" text-center" sm={3}>
                                <p className="tittle"> <FontAwesomeIcon className="red" icon={faPhone} /> +008847295792 <br />
                                    (Official)
                                </p>
                                <p>Contact Number</p>
                            </Col>
                            <Col className=" text-center" sm={3}>
                                <p className="tittle"> <FontAwesomeIcon className="red" icon={faMailBulk} /> nutritionhub@gmail <br />
                                    .com
                                </p>
                                <p>Email Address</p>
                            </Col>

                        </Row>
                    </div>
                </div>
            </div>

            {/* footer Container */}
            <div className="footer">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Contact;