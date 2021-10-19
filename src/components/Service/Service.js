import React from 'react';
import { Link } from 'react-router-dom';
import "./Sevice.css"


const Service = (props) => {
    const { name, img, description, id } = props.service
    return (
        <div className="service pb-3 px-4 pt-2 text-center">
            <img src={img} alt="" srcset="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="text-center">
                <Link to={`/details/${id}`}>
                    <button className="btn">Details</button>
                </Link>
            </div>
        </div>

    );
};

export default Service;