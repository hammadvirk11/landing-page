import React from "react";
import "./Card.css";
import { Row, Col, Image, Button } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineArrowRight } from "react-icons/ai";
import cover from '../../assets/cover5.jpg'
import avatar from '../../assets/avatar10.jpg'

export default function Card() {

    return (
        <React.Fragment>
            <div className="card-auction">
                <Image src={cover} className="image-radius" />
                <Button className="button-absolute">an hour left</Button>
                <h5 className="title">I Love u</h5>
                <div className="image-flex">
                    <Image src={avatar} className="image-radius1" />
                    <p className="name">@NickJones</p>
                </div>
                <hr />
                <p  >Current price</p>
                <div className="ETH-flex">
                <h5 className="title-ETH">1.11 ETH</h5>
                <p className="number"><AiOutlineHeart style={{marginTop:-4}}/>  702</p>

                </div>
            </div>
        </React.Fragment>
    );
}

