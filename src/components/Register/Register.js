// import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
// import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/Firebase.init';
import Header from '../Header/Header';
import "./Register.css"

initializeAuthentication();

const Register = () => {

    return (
        <div classname="login-container">
            <div>
                <Header></Header>
            </div>
            <div className="login-Container text-center">
                <h3 className="tittle">Please Register</h3>
                <Form>
                    <label htmlFor="inputEmail3" className=""> Email :</label>
                    <input type="email" className="input" id="inputEmail3" required />
                    <br />
                    <br />
                    <label htmlFor="inputPassword3" className=""> Password : </label>
                    <input required type="password" className="" id="inputPassword3" />
                    <br />
                    <br />
                    <input className="btn-2" type="submit" value="Submit" />
                </Form>
                <Link to="/login">Already Registerd?</Link>
            </div>


        </div>
    );
};

export default Register;