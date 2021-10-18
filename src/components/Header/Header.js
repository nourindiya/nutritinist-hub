import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/usefirebase';


const Header = () => {

    const { user, logOut } = useFirebase();
    // const { user, logOut } = useAuth();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="nav" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Nutritionist Hub</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="link" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="link" as={Link} to="/feature">Feature</Nav.Link>
                        <Nav.Link className="link" as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link className="link" as={Link} to="/contact">Contact</Nav.Link>
                        <Navbar.Text className="mx-2">
                            <FontAwesomeIcon icon={faUser} />  User:
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        {user?.email ?
                            <Nav.Link as={Link} to="/login" className="btn-2"
                                onClick={logOut}>Log Out</Nav.Link>
                            : <Nav.Link className="link" as={Link} to="/login">Log In</Nav.Link>
                        }

                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;