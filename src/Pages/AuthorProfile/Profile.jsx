import React from "react";
import "./Profile.css";
import Navbar from '../../Components/NavBar/CustomNavbar'
import Footer from '../../Components/Footer/Footer'
import pic from '../../assets/bg.png'
import { Image, Row, Col } from "react-bootstrap";
import ProfileSidebar from '../../Components/ProfileSidebar/ProfileSidebar'
export default function Profile() {

  return (
    <React.Fragment>
      <Navbar />
      <Image src={pic} className="pic-style"/>


              <ProfileSidebar/>
    

      <Footer/>
    </React.Fragment>
  );
}

