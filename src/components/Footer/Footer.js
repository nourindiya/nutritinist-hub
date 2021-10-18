import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"
import { faLaptop, faMailBulk, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div >
            <Container className="footer">
                <Row className="pt-5 pb-4">
                    <Col sm={4}>
                        <p className="p">About Us</p>
                        <p>Company Overview</p>
                        <p>Meet The Team</p>
                        <p>More About Us</p>
                    </Col>
                    <Col sm={4}>
                        <p className="p">Resources</p>
                        <p>Payments</p>
                        <p>Let Us Help You</p>
                        <p>Creat Account</p>
                        <p>Campaign</p>
                    </Col>
                    <Col sm={4}>
                        <p className="p">Get In Touch</p>
                        <p><FontAwesomeIcon className="blue" icon={faPhone} /> +08829374299 </p>
                        <p><FontAwesomeIcon className="red" icon={faMap} /> Gulsan 1 ,House 1/2 ,Dhaka-Bangladesh</p>
                        <p><FontAwesomeIcon className="orange" icon={faMailBulk} /> nutritionist.hud@gmail.com</p>
                        <p><FontAwesomeIcon icon={faLaptop} className="gray" /> @nutirtionist01 </p>
                        <p></p>
                    </Col>
                    <div>
                        <p className="text-center pt-4 p">© CopyRight 2021 Nutritionist Hub, Dhaka Banglades.</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;