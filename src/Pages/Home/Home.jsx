import React from "react";
import "./Home.css";
import Navbar from '../../Components/NavBar/CustomNavbar'
import MainSection from '../../Components/MainSection/MainSection'
import LiveAuctions from '../../Components/LiveAuctions/LiveAuctions'
import TopSellers from '../../Components/TopSellers/TopSellers'
import Explore from '../../Components/Explore/Explore'


export default function Home() {

  return (
    <React.Fragment>
      <Navbar />
      <MainSection/>
      <LiveAuctions/>
      <TopSellers/>
      <Explore/>

    </React.Fragment>
  );
}

