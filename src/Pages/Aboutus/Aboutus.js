import React from 'react';
import { Col } from 'react-bootstrap';
import catHand from '../../petImage/hero_image_12.png';
import winone from '../../petImage/winone.jpg';
import wintwo from '../../petImage/wintwo.jpg';
import winthree from '../../petImage/winthree.jpg';
import winfour from '../../petImage/winfour.jpg';
import './Aboutus.css';

const Aboutus = () => {
    return (
        <div className='allAbout'>
            <img src={catHand} alt="" />
            <div className='aboutus'>
                <h1> <span style={{color:'brown'}}>ABOUT</span> US</h1>
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
            <br /><br />
            <div>
                <h1>ABOUT <span style={{color:'brown'}}>OUR FOOD</span> QUALITY</h1>
                <p>Pet food quality is difficult to define but is easily measured by the ultimate judge, the pets.Consumers often evaluate quality on the basis of <br /> ingredients, guaranteed analysis, palatability, physical form and appearance of ration, etc. </p>
                <div className='row'>
                    <Col lg={3}>
                        <div className='card-style'>
                        <img src="https://i.dlpng.com/static/png/7000069_preview.png" alt="" />
                        </div>
                    </Col>
                    <Col lg={3}>
                    <div className='card-style'>
                    <img src="https://www.justrightpetfood.com/media/wysiwyg/bowl.png" alt="" />
                    </div>
                    </Col>
                    <Col lg={3}>
                    <div className='card-style'>
                    <img src="https://freshpet.com/wp-content/uploads/2013/10/NF_DOG_WM_GrainFreeChickenwithCarrotsSpinach_5.png" alt="" />
                    </div>
                    </Col>
                    <Col lg={3}>
                    <div className='card-style'>
                    <img src="https://image.freepik.com/free-photo/dry-cat-food-bowl-isolated-white-background_102618-2009.jpg" alt="" />
                    </div>
                    </Col>
                </div>
            </div>
            <br /><br />
            <div>
                <h1>An <span style={{color:'brown'}}>award-winning</span> pet food</h1>
                <p>Our whole-prey raw inspired recipes, chews and rewards are handcrafted
in small <br /> batches using finest ingredients</p>
                <div className='row'>
                    <Col lg={3}>
                        <div className='win-style'>
                        <img src={winone} alt="" />
                        </div>
                    </Col>
                    <Col lg={3}>
                    <div className='win-style'>
                    <img src={wintwo} alt="" />
                    </div>
                    </Col>
                    <Col lg={3}>
                    <div className='win-style'>
                    <img src={winthree} alt="" />
                    </div>
                    </Col>
                    <Col lg={3}>
                    <div className='win-style'>
                    <img src={winfour} alt="" />
                    </div>
                    </Col>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;