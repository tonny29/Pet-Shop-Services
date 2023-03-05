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
                <h1> <span style={{color:'brown'}}> Dog Food</span> For Good Health</h1>
                <p>The nutrient foods picked below will help your dog fight disease, boost energy, and maintain good health in general. The Foods Are: Cabbage, Carrots, Pumpkin, Sweet Potatoes, Fish, Any Kind of Air-Dried, Chia Seeds, Yogurt etc.</p>
                <h2><span style={{color:"black"}}>Price Around: </span> $33.00 - $299.00</h2>
                <br />
                <button>DOG FOOD</button>
            </Col>
        </div>
    );
};

export default DogFood;