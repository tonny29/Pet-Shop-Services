import {
  faHeart,
  faTemperatureHigh,
  faDrumstickBite,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";
import PremiumFood from "../../petImage/premiumFood.jpg"
import "./Treatment.css";

const Treatment = () => {
  return (
    <div className="row food-margin">
      <Col lg={6}>
        <h1>
          <span style={{ color: "brown",fontWeight:"bold" }}>PREMIUM</span><br /> Pet Food Manufacturer <br /><span style={{ color: "brown",fontWeight:"bold" }}>SHOULD HAVE</span>
        </h1>
        <div className="row ms-3">
          <Col lg={5} className="foodManufacturer">
            <div className="icon">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <h4>Superior Safty Practices</h4>
          </Col>
          <Col lg={5} className="foodManufacturer">
            <div className="icon">
              <FontAwesomeIcon icon={faTemperatureHigh} />
            </div>
            <h4>Optimal Drying Air Temperatures</h4>
          </Col>
          <Col lg={5} className="foodManufacturer">
            <div className="icon">
              <FontAwesomeIcon icon={faDrumstickBite} />
            </div>
            <h4>Exceptional Ingredient Quality</h4>
          </Col>
          <Col lg={5} className="foodManufacturer">
            <div className="icon">
              <FontAwesomeIcon icon={faTrophy} />
            </div>
            <h4>Made By Nutrition Experts</h4>
          </Col>
        </div>
      </Col>
      <Col lg={6}>
        <div className="foodimg">
          <img
            src={PremiumFood}
            alt=""
          />
        </div>
      </Col>
    </div>
  );
};

export default Treatment;
