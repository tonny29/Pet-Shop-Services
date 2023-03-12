import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import fakedata from "../FakeDataForDetail/FakeData";
import './FoodDetails.css';

const FoodDetails = () => {
  const { detailId } = useParams();
  const details = fakedata.find((data) => data.id === parseInt(detailId));
  return (
    <div>
      <div className="FoodDetailHead">
        <h1>The necessity of Providing Pets with Proper Nutrition -</h1>
        <p>For the growth of tissue and organs, animals require protein and other nutrients.Additionally, protein is crucial for animal growth in feed. <br />When given the proper amount of protein and other minerals, animals prefer to remain active and energized throughout the day.</p>
      </div>
      <Container className="mt-5">
        <Row>
          <Col xs={6}>
            <div className="SelectImage">
                <img src={details.image} alt=""/>
            </div>
            
          </Col>
          <Col xs={6}>
            <div className="foodDetails">
                <h2>{details.name}</h2>
                <p>These vitamins in this food:</p>
                <ul>
                    <li>Calsium</li>
                    <li>Calsium</li>
                    <li>Calsium</li>
                </ul>
            </div>
          </Col>
        </Row>
        </Container>
    </div>
  );
};

export default FoodDetails;
