import React from 'react';
import { Col } from 'react-bootstrap';
import catfood from '../../petImage/catfood.jpg';
import './CatFood.css';

const CatFood = () => {
    return (
        <div className='row cat-food'>
          <Col lg={6}>
            <h1><span style={{color:'brown'}}> Cat Food</span> For Good Health</h1>
            <p>Cats are meat eaters, plain and simple. They have to have protein from meat for a strong heart, good vision, and a healthy reproductive system. Cooked beef, chicken, turkey, and small amounts of lean deli meats are a great way to give them that.</p>
            <h2><span style={{color:"black"}}>Price Around: </span> $33.00 - $299.00</h2>
            <br />
            <button>CAT FOOD</button>
          </Col> 
          <Col lg={6}>
          <img src={catfood} alt="" />
          </Col> 
        </div>
    );
};

export default CatFood;