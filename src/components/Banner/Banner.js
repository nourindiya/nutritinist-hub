import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 car"
                    src="https://th.bing.com/th/id/R.14f54cd508719e7e6d10ea99ffb68bd9?rik=bZyt8DMa6qjrRA&riu=http%3a%2f%2fwww.uhlbd.com%2fbackend%2fweb%2fuploads%2f1451280834DSC_0157.jpg&ehk=%2fA91u3LrGE9Q8dtvPfHRF6HXMD8XSvtCH840lx4SeZg%3d&risl=&pid=ImgRaw&r=0"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 car"
                    src="https://th.bing.com/th/id/R.4a7de97fb9d5f8e82869a92cf0ea60b9?rik=VT9JSQ88ZIJhhg&riu=http%3a%2f%2fwww.nanocat.co.in%2fuploads%2f1%2f7%2f7%2f9%2f17793103%2feditor%2fgroup-photo-edited.jpeg%3f1484822619&ehk=9MINjrVFkxgZ%2bsKOXqsU2g3ZTKD1APg5cHT9LXb%2b9PE%3d&risl=&pid=ImgRaw&r=0"
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 car"
                    src="https://th.bing.com/th/id/R.ca77373c8eda1e26bf46ca3f25eceda9?rik=wHdW2aYNmPi3iA&pid=ImgRaw&r=0"
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;