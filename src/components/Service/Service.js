import React from 'react';
// import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Sevice.css"


const Service = (props) => {
    const { name, img, description, id } = props.service
    return (
        <div className="service">
            <div>
                <img className="card-img" src={img} alt="" srcset="" />
            </div>
            <div className="card-body">
                <h2>{name}</h2>
                <p>{description}</p>
                <Link to={`/details/${id}`}>
                    <button className="btn">Details</button>
                </Link>
            </div>
        </div>

    );
};

export default Service;