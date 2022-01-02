import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className='nav-style'>
            <div className='logo'>
            <img src="https://pawsofcoronado.org/wp-content/uploads/2016/01/cropped-favicon.png" alt="" />
            
            </div>
            
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
    <Nav.Link as={Link} to="/login">Login</Nav.Link>
    <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
   
        </div>
    );
};

export default Navigation;