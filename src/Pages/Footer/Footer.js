import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faMailBulk,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import allPets from "../../petImage/footerImg.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-style row">
      <Col lg={4}>
        <div className="footer-one">
          <h4>
            <FontAwesomeIcon icon={faHome} /> PET AIR-DRIED FOOD
          </h4>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> House 01, Road 07 Jashim{" "}
            <br /> Uddin Over Bridge Open 24 hours
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> 02334455667 <br /> 028874646329{" "}
          </p>
          <p>
            <FontAwesomeIcon icon={faMailBulk} /> petairdriefood@gmail.com
          </p>
        </div>
      </Col>
      <Col lg={4}>
        <div className="footer-two">
          <h4> FOR IMERGENCY CALL</h4>
          <p>
            <FontAwesomeIcon icon={faPhone} /> 023748567120
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> 026773540089
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> 023247894577
          </p>
        </div>
      </Col>
      <Col lg={4}>
        <div className="footer-two">
          <h4> PET SHOP & SERVICES</h4>
          <div className="footer-img">
            <img src={allPets} alt="" />
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Footer;
