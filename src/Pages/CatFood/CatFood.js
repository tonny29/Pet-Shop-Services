import React from 'react';
import { Col } from 'react-bootstrap';
import catfood from '../../petImage/catfood.jpg';
import './CatFood.css';

const CatFood = () => {
    return (
        <div className='row cat-food'>
          <Col lg={6}>
            <h5>2 WEEKS PROMO</h5>
            <h1> <span style={{color:'brown'}}>Air-Dried</span> Cat Food</h1>
            <p>Handcrafted air-dried recipes with high inclusions of meat, seafood, organs, <br /> and bone in whole-prey ratios.</p>
            <h2>$33.00 - $299.00</h2>
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