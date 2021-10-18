
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Details.css"

const Details = () => {
    let { serviceId } = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState([]);


    useEffect(() => {
        fetch('/productsDetail.json')
            .then((res) => res.json())
            .then((data) => setServiceDetails(data.service));
    }, []);


    useEffect(() => {
        const foundService = serviceDetails.find((service) => service.login.id == serviceId)
        setSingleService(foundService);
    }, [serviceDetails])



    return (
        <>
            <div className="header">
                <Header></Header>
            </div>
            <div className="detail text-center">
                <div className="card3 mx-auto">
                    <div>
                        <img className="detail-img pt-3" src={singleService?.picture?.img} alt="" srcset="" />
                    </div>
                    <div className="details">
                        <h1 className="pp mt-3">Id No :{serviceId}</h1>
                        <h2 className="pp mt-3">Name :{singleService?.name}</h2>
                        <h2 className="pp mt-3">Gender :{singleService?.gender}</h2>
                        <h2 className="pp mt-3">Email :{singleService?.email}</h2>
                        <h2 className="pp mt-3">{singleService?.description}</h2>
                    </div>
                </div>
            </div >
            <div className="w-100">
                <Footer></Footer>
            </div>
        </>
    );
};

export default Details;