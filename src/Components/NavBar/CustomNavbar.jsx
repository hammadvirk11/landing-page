import React from "react";
import { Navbar, Nav, Container, NavDropdown,Button } from "react-bootstrap";
import './CustomNavbar.css'
import { Link } from "react-router-dom";

function CustomNavbar() {

  return (
<>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{fontSize:28}}>Unitok</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {/* <Nav.Link href="#pricing"><input className="input-search" 
          placeholder="Search items, collectionn and creators"
          placeholderColor="white"/></Nav.Link>
          <NavDropdown title="Home" id="collasible-nav-dropdown" className="padding-dropdown">
              <NavDropdown.Item href="#action/3.1">Home style 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Home style 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Home style 3</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Explore" id="collasible-nav-dropdown" className="padding-dropdown">
            <NavDropdown.Item href="#action/3.1">Explore style 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Explore style 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Explore style 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Item style 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Item style 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{padding:10,paddingTop:18}} href="#pricing" >Activity</Nav.Link>
            <NavDropdown title="Community" id="collasible-nav-dropdown" className="padding-dropdown">
              <NavDropdown.Item href="#action/3.1">Unitok</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Help Center</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contacts</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="collasible-nav-dropdown" className="padding-dropdown">
              <NavDropdown.Item href="#action/3.1">Authors</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Author</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Collection</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Create</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <NavDropdown title="John Doe" id="collasible-nav-dropdown" className="padding-dropdown">
              </NavDropdown> */}
              <Link to="/signin"><Button className="sign-in">Sign in</Button></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="Smll-nav">
<h2 className="small-unitok">Unitok</h2>
<Button className="sign-in">Sign in</Button>
    </div>
    </>
  );
}
export default CustomNavbar;