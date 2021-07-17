import React from "react";
import "./MainSection.css";
import {Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  {Link} from 'react-router-dom'

export default function MainSection() {
  var settings = {
    dots: false,
    infinite: true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
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
      <div style={{marginLeft:'8%',marginRight:'8%'}}>
        <Slider {...settings}>
        <div className="main-back">
        <h1>The largest NFT marketplace</h1>
        <p className="marketplace">Digital marketplace for crypto collectibles and non-fungible tokens.</p>
        <p className="marketplace">Buy, sell, and discover exclusive digital assets.</p>
        <div className="button-flex">
        <Link to="/signin"><Button className="explore">Explore</Button></Link>{' '}
        <Link to="/signin">  <Button className="create" >Create</Button></Link>
        </div>
        </div>

        <div className="main-back1">
        <h1>The largest NFT marketplace</h1>
        <p className="marketplace">Digital marketplace for crypto collectibles and non-fungible tokens.</p>
        <p className="marketplace">Buy, sell, and discover exclusive digital assets.</p>
        <div className="button-flex">
        <Link to="/signin"> <Button className="explore">Explore</Button></Link>{' '}
        <Link to="/signin"><Button className="create" >Create</Button></Link>
        </div>
        </div>


        <div className="main-back2">
        <h1>The largest NFT marketplace</h1>
        <p className="marketplace">Digital marketplace for crypto collectibles and non-fungible tokens.</p>
        <p className="marketplace">Buy, sell, and discover exclusive digital assets.</p>
        <div className="button-flex">
        <Link to="/signin"><Button className="explore">Explore</Button></Link>{' '}
        <Link to="/signin"> <Button className="create" >Create</Button></Link>
        </div>
        </div>
        </Slider>
        </div>
    </React.Fragment>
  );
}

