import React from 'react';
import { Col } from "react-bootstrap";
import winone from "../../petImage/winone.jpg";
import wintwo from "../../petImage/wintwo.jpg";
import winthree from "../../petImage/winthree.jpg";
import winfour from "../../petImage/winfour.jpg";
const Aboutus = () => {
    return (
        <div className="services">
            <div>
        <h1>
          ABOUT <span style={{ color: "brown" }}>OUR FOOD</span> QUALITY
        </h1>
        <p>
          Pet food quality is difficult to define but is easily measured by the
          ultimate judge, the pets.Consumers often evaluate quality on the basis
          of <br /> ingredients, guaranteed analysis, palatability, physical
          form and appearance of ration, etc.{" "}
        </p>
        <div className="row">
          <Col lg={3}>
            <div className="services-style">
              <img
                src="https://image.freepik.com/free-photo/dry-cat-food-bowl-isolated-white-background_102618-2009.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col lg={3}>
            <div className="services-style">
              <img
                src="https://www.justrightpetfood.com/media/wysiwyg/bowl.png"
                alt=""
              />
            </div>
          </Col>
          <Col lg={3}>
            <div className="services-style">
              <img
                src="https://freshpet.com/wp-content/uploads/2013/10/NF_DOG_WM_GrainFreeChickenwithCarrotsSpinach_5.png"
                alt=""
              />
            </div>
          </Col>
          <Col lg={3}>
            <div className="services-style">
              <img
                src="https://image.freepik.com/free-photo/dry-cat-food-bowl-isolated-white-background_102618-2009.jpg"
                alt=""
              />
            </div>
          </Col>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h1>
          An <span style={{ color: "brown" }}>award-winning</span> pet food
        </h1>
        <p>
          Our whole-prey raw inspired recipes, chews and rewards are handcrafted
          in small <br /> batches using finest ingredients
        </p>
        <div className="row">
          <Col lg={3}>
            <div className="win-style">
              <img src={winone} alt="" />
            </div>
          </Col>
          <Col lg={3}>
            <div className="win-style">
              <img src={wintwo} alt="" />
            </div>
          </Col>
          <Col lg={3}>
            <div className="win-style">
              <img src={winthree} alt="" />
            </div>
          </Col>
          <Col lg={3}>
            <div className="win-style">
              <img src={winfour} alt="" />
            </div>
          </Col>
        </div>
      </div>
        </div>
    );
};

export default Aboutus;