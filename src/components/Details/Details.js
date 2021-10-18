import React from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Details.css"

const Details = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <div className="header">
                <Header></Header>
            </div>
            <div className="detail-container">
                <h1>{serviceId}</h1>

            </div>
            <div className="footer">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Details;