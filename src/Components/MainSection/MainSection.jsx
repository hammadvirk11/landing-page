import React from "react";
import "./MainSection.css";
import {Button } from "react-bootstrap";

export default function MainSection() {

  return (
    <React.Fragment>
        <div className="main-back">
        <h1>The largest NFT marketplace</h1>
        <p className="marketplace">Digital marketplace for crypto collectibles and non-fungible tokens.</p>
        <p>Buy, sell, and discover exclusive digital assets.</p>
        <div className="button-flex">
        <Button className="explore">Explore</Button>{' '}
        <Button className="create" >Create</Button>
        </div>
        </div>
    </React.Fragment>
  );
}

