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
                        <img src="https://media.istockphoto.com/photos/border-collie-in-a-kennel-picture-id173656433?k=20&m=173656433&s=612x612&w=0&h=OLtKcvFQVnYkQPnrQI2nK_du9iWnmHzsKIgQRCzukMs=" alt="" />
                        <h4>Dog Boarding</h4>
                        <p>While you’re on holiday, here’s where furry friends will spend their time.</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                    <div className='card-style'>
                    <img src="https://s36537.pcdn.co/wp-content/uploads/2019/06/Cat-with-sunglasses.jpg.optimal.jpg" alt="" />
                    <h4>Cat Boarding</h4>
                        <p>We have highest quality accommodations for even the fussiest feline.</p>
                    </div>
                    </Col>
                    <Col lg={3}>
                    <div className='card-style'>
                    <img src="https://media.istockphoto.com/photos/yorkshire-terrier-puppy-surrounded-by-hands-holding-groomer-tools-picture-id858041808?k=20&m=858041808&s=612x612&w=0&h=BZB_yl4nh6w5F110oCmCQXnMw2LFBIan3ULeUv2cMbQ=" alt="" />
                    <h4>Pet Grooming</h4>
                        <p>Your dog will leave feeling happy, looking and smelling great.</p>
                    </div>
                    </Col>
                    <Col lg={3}>
                    <div className='card-style'>
                    <img src="https://w7.pngwing.com/pngs/444/106/png-transparent-pet-sitting-pet-taxi-dog-cat-taxi-cartoon-mammal-pet-car-thumbnail.png" alt="" />
                    <h4>Pet Taxi</h4>
                        <p>If you are short on time we can arrange taxi transport for you.</p>
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