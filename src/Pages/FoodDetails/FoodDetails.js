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
      <h1>this is detail page: {detailId}</h1>
      <Container>
        <Row>
          <Col xs={6}>
            <div className="SelectImage">
                <img src={details.image} alt=""/>
            </div>
            
          </Col>
          <Col xs={6}>
            <div className="foodDetails">
                <h2>Name Of Food: {details.name}</h2>
                <p>This Food Have Below Protins:</p>
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
