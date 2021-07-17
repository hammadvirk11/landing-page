import React from "react";
import "./ProductForm.css";
import { Form, Image, Button, Row, Col, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/actions/otherActions";
import { axiosClient } from '../../helper';
import { NotificationManager } from "react-notifications";
import axios from "axios";

export default function FormDetail() {
  const dispatch = useDispatch();
  const [title , setTitle] = React.useState("")
  const [description , setdescription] = React.useState("")
  const [size , setsize] = React.useState("")
  const [Properties , setProperties] = React.useState("")
  const [radio , setradio] = React.useState("")


  const handleSubmit = async () => {
    console.log("idr hn e")
    const data = {
      "id": "a",
      "handle": "adoratherapy-communication-chakra-spice",
      "title": title,
      "description": description,
      "primaryImageSrc": {
          "id": "14075668463755",
          "imageSrc": "https://shop-type-images-store.s3.amazonaws.com/dev/products/6fa51425-340e-f76c-69a1-dbbee4b241ad/comm3.jpg"
      },
      "catalogId": "04066e6d-4e8e-f9f0-3c35-f1e696ff4238",
      "variants": [
          {
              "id": "32052651131023",
              "discountedPrice": "30.00",
              "taxable": true,
              "imageIds": [
                  "14075668463755"
              ],
              "sku": "RPCS5COM",
              "quantity": 9,
              "variantNameValue": {
                  "size": size
              },
              "dimensions": {
                  "length": "",
                  "width": "",
                  "height": ""
              },
              "weight": "",
              "dimension_unit": "",
              "weight_unit": "",
              "is_virtual": false
          }
      ],
      "store_name": "shop-types",
      "currency": "USD",
      "sourceId": "4494266695819",
      "sourceName": "SHOPIFY",
      "options": [
          {
              "name": "size",
              "values": [
                  "10ML Roll On"
              ]
          }
      ],
      "status": "enabled",
      "geoLocation": {
          "type": "Point",
          "coordinates": [
              0,
              0
          ]
      },
      "vendorName": "Sheroes Vendor",
      "productCommission": {
          "percentage": 0
      },
      "extras":{
        "id":232323
      },
      "slug": ""
    }
   dispatch(addProduct(data));
  }
  return (
    <React.Fragment>
      <div className="card-form">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="label-color">Upload File</Form.Label>
              <Form.Control type="email" placeholder="e.g. Image , Audio, Video" className="input-back" disabled />
            </Form.Group>

          </Row>
          <Form.Label className="label-color" style={{ marginBottom: 20 }}>Item Detail</Form.Label>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label className="label-color" style={{ marginLeft: 20 }}>Item name</Form.Label>
            <Form.Control placeholder="e.g crypto heart" className="input-back" onChange={(event) => setTitle(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label className="label-color" style={{ marginLeft: 20 }}>Description</Form.Label>
            <Form.Control placeholder="" className="input-back" onChange={(event) => setdescription(event.target.value)}/>
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
              <Form.Label className="label-color" style={{ marginLeft: 20 }}>Size</Form.Label >
              <Form.Control className="input-back" placeholder="e.g Size" onChange={(event) => setsize(event.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className="label-color" style={{ marginLeft: 20 }}>Properties</Form.Label>
              <Form.Control className="input-back" placeholder="Subject" onChange={(event) => setProperties(event.target.value)}/>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridRadio">
            <Form.Check id="same" type="radio" label="Put on sale" className="color-checkbox" />
            <Form.Check id="same" type="radio" label="Instant sale price" className="color-checkbox" />
            <Form.Check id="same" type="radio" label="Unlock one purchased" className="color-checkbox" />

          </Form.Group>

          <Button variant="primary" className="save-personal" onClick={handleSubmit}>
            CREATE ITEM
          </Button>
        </Form>
      </div>
    </React.Fragment>
  );
}

