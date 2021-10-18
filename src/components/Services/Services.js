import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Sevices.css"
const Services = () => {

    const [services, setSevices] = useState([]);
    useEffect(() => {
        fetch("./produtcs.json")
            .then(res => res.json())
            .then(data => setSevices(data))
    }, [])

    return (
        <div>
            <p className="tittle">Our Sevices</p>


            <div className="service-container">
                {
                    services.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>

                    )
                }

            </div>


        </div>
    );
};

export default Services;