import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="nav" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Nutritionist Hub</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="link" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="link" as={Link} to="/sevices">Services</Nav.Link>
                        <Nav.Link className="link" as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link className="link" as={Link} to="/contact">Contact</Nav.Link>
                        <Navbar.Text className="mx-2">
                            <FontAwesomeIcon icon={faUser} />  User: <a href="#login">Mark Otto</a>
                        </Navbar.Text>

                        <Nav.Link className="link" href="#features">Log In</Nav.Link>


                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;