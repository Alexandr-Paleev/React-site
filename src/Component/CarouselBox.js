import React, { Component } from './node_modules/react';
import Carousel from './node_modules/react-bootstrap/Carousel';
import first from '../assets/first.jpg';
import second from '../assets/second.jpg';
import third from '../assets/third.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        width={400} height={600}
                        className="d-block w-100 height=500px"
                        src={first}
                        alt="first"
                    />
                    <Carousel.Caption>
                        <h3>Iland image</h3>
                        <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={400} height={600}
                        className="d-block w-100"
                        src={second}
                        alt="first"
                    />
                    <Carousel.Caption>
                        <h3>Iland image</h3>
                        <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={400} height={600}
                        className="d-block w-100"
                        src={third}
                        alt="first"
                    />
                    <Carousel.Caption>
                        <h3>Iland image</h3>
                        <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
