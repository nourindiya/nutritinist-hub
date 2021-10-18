import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Login.css"



const Login = () => {

    const { signInusingGoogle } = useAuth()

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="login-Container text-center">
                <h1 className="tittle">Create Account</h1>
                <Form>
                    <label htmlFor="email"> Email : </label>  <input required type="email" name="email" id="" />
                    <br />
                    <br />
                    <label htmlFor="password"> Password : </label>   <input required type="password" name="password" id="" />

                    <br />
                    <br />
                    <input className="btn-2" type="submit" value="Submit" />
                </Form>
                <br />
                <Link className="/register">Already Register ?</Link>
                <br />
                <br />
                <Link>
                    <button onClick={signInusingGoogle} className="btn-2 p-2 mt-4">Google Sign In</button>
                </Link>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Login;