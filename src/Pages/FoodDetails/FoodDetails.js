import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import fakedata from "../FakeDataForDetail/FakeData";
import 'animate.css';
import "./FoodDetails.css";

const FoodDetails = () => {
  const { detailId } = useParams();
  const details = fakedata.find((data) => data.id === parseInt(detailId));
  return (
    <div>
      <div className="FoodDetailHead">
        <h1>The necessity of Providing Pets with Proper Nutrition -</h1>
        <p>
          For the growth of tissue and organs, animals require protein and other
          nutrients.Additionally, protein is crucial for animal growth in feed.{" "}
          <br />
          When given the proper amount of protein and other minerals, animals
          prefer to remain active and energized throughout the day.
        </p>
      </div>
      <div>
      <hr className="hrStyle mt-5"/>
        <h2 className="PetName animate__animated animate__backInUp animate__slower	" >{details.name}</h2>
        <hr className="hrStyle"/>
      </div>
     
      <Container className="mt-5">
        <Row>
          <Col xs={6}>
            <div className="SelectImage">
              <img src={details.image} alt="" />
            </div>
          </Col>
          <Col xs={6}>
            <div className="foodDetails">
              <p>
                We adore having pets, and we are constantly worried for their
                wellbeing. We keep a variety of{" "}
                <span style={{ fontWeight: "bolder", color: "brown" }}>
                  {details.name}
                </span>{" "}
                breeds. Here are some tips for pet owners on how to support
                their animals' growth.
              </p>
              <ul>
                <li>{details.typeOne}</li>
                <li>{details.typeTwo}</li>
                <li>{details.typeThree}</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FoodDetails;
