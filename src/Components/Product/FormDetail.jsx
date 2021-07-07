import React from "react";
import "./ProductForm.css";
import { Form, Image, Button, Row, Col, } from "react-bootstrap";

export default function Card() {

    return (
        <React.Fragment>
            <div className="card-form">
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label className="label-color">Upload File</Form.Label>
      <Form.Control type="email" placeholder="e.g. Image , Audio, Video" className="input-back"  disabled/>
    </Form.Group>

  </Row>
  <Form.Label className="label-color" style={{marginBottom:20}}>Item Detail</Form.Label>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label className="label-color" style={{marginLeft:20}}>Item name</Form.Label>
    <Form.Control placeholder="e.g crypto heart" className="input-back" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label className="label-color" style={{marginLeft:20}}>Description</Form.Label>
    <Form.Control placeholder="" className="input-back"  />
  </Form.Group>

  <Row className="mb-3">
    {/* <Form.Group as={Col} controlId="formGridCity">
      <Form.Label className="label-color" style={{marginLeft:20}}> Royalties</Form.Label >
      <Form.Control  className="input-back"/>
    </Form.Group> */}

    {/* <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group> */}
        <Form.Group as={Col} controlId="formGridCity">
      <Form.Label className="label-color" style={{marginLeft:20}}>Size</Form.Label >
      <Form.Control className="input-back" placeholder="e.g Size" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label className="label-color" style={{marginLeft:20}}>Properties</Form.Label>
      <Form.Control className="input-back" placeholder = "Subject" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridRadio">
    <Form.Check type="radio" label="Put on sale" className="color-checkbox"/>
    <Form.Check type="radio" label="Instant sale price" className="color-checkbox"/>
    <Form.Check type="radio" label="Unlock one purchased" className="color-checkbox"/>

  </Form.Group>

  <Button variant="primary" type="submit" className="save-personal">
    CREATE ITEM
  </Button>
</Form>
            </div>
        </React.Fragment>
    );
}

