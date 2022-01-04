import React from 'react';
import { Col } from 'react-bootstrap';
import catHand from '../../petImage/hero_image_12.png';
import './Aboutus.css';

const Aboutus = () => {
    return (
        <div className='allAbout'>
            <img src={catHand} alt="" />
            <div className='aboutus'>
                <h1>ABOUT US</h1>
                <p>From the time our friends sniff their way through the door until they wag their <br /> tails out in the afternoon, we cater to their nature.</p>
                <div className='row'>
                    <Col lg={3}>
                        <div className='card-style'>
                        <img src="https://pmrpressrelease.com/wp-content/uploads/2018/12/Pet-Food.jpg" alt="" />
                        <p>one part to learn</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                    <div className='card-style'>
                    <img src="https://www.petfoodindustry.com/ext/resources/Images-by-month-year/20_08/Pet-food-bulk-close-up.jpg" alt="" />
                        <p>one part to learn</p>
                    </div>
                    </Col>
                    <Col lg={3}>
                    <div className='card-style'>
                    <img src="https://st4.depositphotos.com/3516927/24752/i/1600/depositphotos_247524006-stock-photo-wet-and-dry-dog-food.jpg" alt="" />
                        <p>one part to learn</p>
                    </div>
                    </Col>
                    <Col lg={3}>
                    <div className='card-style'>
                    <img src="https://www.kazior5.com/wp-content/uploads/2019/05/pet-food.jpg" alt="" />
                        <p>one part to learn</p>
                    </div>
                    </Col>
                </div>
            </div>
            <div>
                <h1>ABOUT OUR FOOD QUALITY</h1>
                <p>Pet food quality is difficult to define but is easily measured by the ultimate judge, the pets.Consumers often evaluate quality on the basis of ingredients, guaranteed analysis, palatability, physical form and appearance of ration, etc. </p>
                <div className='row'>
                    <Col lg={3}>one part to learn</Col>
                    <Col lg={3}>one part to learn</Col>
                    <Col lg={3}>one part to learn</Col>
                    <Col lg={3}>one part to learn</Col>
                </div>
            </div>
            <div>
                <h1>Tjis is third part</h1>
            </div>
        </div>
    );
};

export default Aboutus;