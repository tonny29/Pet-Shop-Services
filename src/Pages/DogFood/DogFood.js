import React from 'react';
import { Col } from 'react-bootstrap';
import dogfood from '../../petImage/dogfood.jpg';
import './DogFood.css';

const DogFood = () => {
    return (
        <div className='row dog-food'>
            <Col lg={6}>
                <img src={dogfood} alt="" />
            </Col>
            <Col lg={6}>
                <h5>2 WEEKS PROMO</h5>
                <h1> <span style={{color:'brown'}}>Air-Dried</span> Dog Food</h1>
                <p>Handcrafted air-dried recipes with high inclusions of meat, seafood, organs, <br /> and bone in whole-prey ratios.</p>
                <h2>$33.00 - $299.00</h2>
                <br />
                <button>DOG FOOD</button>
            </Col>
        </div>
    );
};

export default DogFood;