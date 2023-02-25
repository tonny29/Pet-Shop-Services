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
          <span style={{ color: "brown",fontWeight:"bold" }}>PREMIUM</span> Pet Food <br />{" "}
          Manufacturer
        </h1>
        <div className="row">
          <Col lg={6}>
            <div className="icon">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <h4>SUPERIOR SAFETY PRACTICES</h4>
          </Col>
          <Col lg={6}>
            <div className="icon">
              <FontAwesomeIcon icon={faTemperatureHigh} />
            </div>
            <h4>OPTIMAL DRYING AIR TEMPERATURES</h4>
          </Col>
          <Col lg={6}>
            <div className="icon">
              <FontAwesomeIcon icon={faDrumstickBite} />
            </div>
            <h4>EXCEPTIONAL INGREDIENT QUALITY</h4>
          </Col>
          <Col lg={6}>
            <div className="icon">
              <FontAwesomeIcon icon={faTrophy} />
            </div>
            <h4>MADE BY NUTRITION EXPERTS</h4>
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
