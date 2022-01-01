import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/home">PET SHOP</Navbar.Brand>
    <Nav className="me-auto">
      </Nav>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;