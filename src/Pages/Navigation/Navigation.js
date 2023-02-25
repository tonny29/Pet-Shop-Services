import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="BG-color">
        <Container>
          <Navbar.Brand as={Link} to="/home" className="text-dark">
            <span className="text-danger fw-bold">PET.</span> SHOP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" className="text-dark">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Services" className="text-dark">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus" className="text-dark">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
