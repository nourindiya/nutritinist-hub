import React from 'react';
import Header from '../Header/Header';
import "./NotFound.css"

const NotFound = () => {
    return (
        <div>
            <div className="header">
                <Header></Header>
            </div>
            <div className="notfound-body">
                <img src="https://image.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48326.jpg" alt="" srcset="" />
            </div>
            <div>
                <p className="text-center text-danger">(Try Again With Valid Value)</p>
            </div>
        </div>
    );
};

export default NotFound;