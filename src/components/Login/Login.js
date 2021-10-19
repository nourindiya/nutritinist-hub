// import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Login.css"


const Login = () => {

    const { signinUsingGoogle, error } = useAuth()

    return (
        <div>
            <div>
                <Header></Header>
            </div>

            <div className="login-Container text-center">
                <h3 className="tittle">Log In</h3>
                <Form>
                    <label htmlFor="inputEmail3" className=""> Email :</label>
                    <input type="email" className="input" id="inputEmail3" required />
                    <br />
                    <br />
                    <label htmlFor="inputPassword3" className=""> Password : </label>
                    <input type="password" className="" id="inputPassword3" required />
                    <br />
                    <br />
                    <input className="btn-2" type="submit" value="Submit" />
                </Form>
                <br />
                <Link to="/register">New to Nutritinist Hub?</Link>
                <br />
                <br />
                <button onClick={signinUsingGoogle} className="btn-2 p-2 mt-4">Google Sign In</button>
                {/* <p>{error}</p> */}
                <div className="row mx-5 mb-3 text-center text-danger">
                    <p > {error}</p>
                </div>
            </div>

            <div className="w-100">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Login;