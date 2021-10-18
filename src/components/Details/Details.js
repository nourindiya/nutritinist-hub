// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Details.css"

const Details = () => {
    let { serviceId } = useParams();

    // const [serviceDetails, setServiceDetails] = useState([]);
    // const [singleService, setSingleService] = useState({});

    // useEffect(() => {
    //     fetch("/productsDetail.json")
    //         .then((res) => res.json())
    //         .then((data) => setServiceDetails(data.products));

    // }, []);


    // useEffect(() => {
    //     const foundService = serviceDetails.find((service) => service.id === serviceId)
    //     setSingleService(foundService);
    // }, [serviceDetails])



    return (
        <div>
            <div className="header">
                <Header></Header>
            </div>
            <div className="detail-container">
                <h1>{serviceId}</h1>
                {/* <h2>{singleService?.img}</h2>
                <h2>{singleService?.email}</h2> */}


            </div>
            <div className="footer">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Details;