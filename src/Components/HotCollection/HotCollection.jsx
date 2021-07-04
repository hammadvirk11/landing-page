import React from "react";
import "./HotCollection.css";
import { Row, Col } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Card from '../Card/SmallCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function HotCollection() {

    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <React.Fragment>
            <div className="live-auction">
                <div className="live-auction-arrow">
                    <h6 className="live">Hot collections</h6>
                    <p>  <AiOutlineArrowLeft />  <AiOutlineArrowRight /></p>
                </div>
                <Row>
                    <Slider {...settings}>
                    <Col md={3}>
                        <Card />
                    </Col>
                    <Col md={3}>
                        <Card />
                    </Col>            <Col md={3}>
                        <Card />
                    </Col>            <Col md={3}>
                        <Card />
                    </Col>            <Col md={3}>
                        <Card />
                    </Col>            <Col md={3}>
                        <Card />
                    </Col>            <Col md={3}>
                        <Card />
                    </Col>            <Col md={3}>
                        <Card />
                    </Col>            <Col md={3}>
                        <Card />
                    </Col>            <Col md={3}>
                        <Card />
                    </Col>
                    </Slider>
                </Row>
            </div>
        </React.Fragment>
    );
}

