import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import useAuth from '../../hooks/useAuth';
import "./Register.css"
import Footer from '../Footer/Footer';



const Register = () => {
    const { signinUsingGoogle, error, handleNameChange, handleRegistration, handlePasswordChange, handleEmailChange } = useAuth();
    return (
        <div classname="login-container">
            <div>
                <Header></Header>
            </div>
            <div className="login-Container text-center">

                <h3 className="tittle">Please Register</h3>

                <Form onSubmit={handleRegistration}>

                    <label htmlFor="inputName3" className=""> Name :</label>
                    <input onBlur={handleNameChange} type="text" className="input" id="inputNam3" required />
                    <br />
                    <br />

                    <label htmlFor="inputEmail3" className=""> Email :</label>
                    <input onBlur={handleEmailChange} type="email" className="input" id="inputEmail3" required />
                    <br />
                    <br />

                    <label htmlFor="inputPassword3" className=""> Password : </label>
                    <input onBlur={handlePasswordChange} required type="password" className="" id="inputPassword3" />
                    <br />
                    <br />

                    <div className="row mx-5 mb-3 text-center text-danger">
                        <p > {error}</p>
                    </div>
                    <br />

                    <input className="btn-2" type="submit" value="Submit" />
                </Form>

                <Link to="/login">Already Registerd?</Link>

                <br />
                <br />
                <button onClick={signinUsingGoogle} className="btn-2">Google Sign In</button>
            </div>

            <div className="w-100">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Register;