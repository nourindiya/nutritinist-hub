import React from 'react';
import Banner from '../Banner/Banner';
import Experst from '../Experts/Experst';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';


import "./Home.css"
const Home = () => {
    return (
        <div>
            <div className="header">
                <Header></Header>
            </div>
            <div className="bann">
                <Banner></Banner>
            </div>
            <div className="home-body">
                <div>
                    <Services></Services>
                </div>
                <div>
                    <Experst></Experst>
                </div>
                <div>
                    <Subscribe></Subscribe>
                </div>
            </div>

            <div className="footer">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;