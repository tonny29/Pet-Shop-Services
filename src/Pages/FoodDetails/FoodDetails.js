import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import fakedata from "../FakeDataForDetail/FakeData";
import "animate.css";
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
        <hr className="hrStyle mt-5" />
        <h2 className="PetName animate__animated animate__backInUp animate__slower	">
          {details.name}
        </h2>
        <hr className="hrStyle" />
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
                their animals' growth. <br />
                <br />
                Having a pet has numerous positive effects on your health. These
                can expand possibilities for people to mingle, go outside, and
                exercise. Frequent pet play or walks help lower triglyceride,
                cholesterol, and blood pressure levels. By providing us with
                companionship, pets can help us manage loneliness and despair.
              </p>
              
              {/* shouldn't give to  */}
              <div className="giveFood">
                <hr className="hrStyleThree" />
                <h3>
                  Should Not Give To{" "}
                  <span style={{ color: "brown" }}>{details.name}</span>
                </h3>
                <hr className="hrStyleThree" />
                <ul>
                  <li>{details.notOne}</li>
                  <li>{details.notTwo}</li>
                  <li>{details.notThree}</li>
                  <li>{details.notFour}</li>
                  <li>{details.notFive}</li>
                  <li>{details.notSix}</li>
                  <li>{details.notSeven}</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="mb-5 giveFood">
        <hr className="hrStyle mt-5" />
        <h3>
          Should Give To <span style={{ color: "brown" }}>{details.name}</span>
        </h3>
        <hr className="hrStyle" />
      </div>
      <Container className="allEatFoodName">
        <Row xs={3} className="g-4 ">
          <Col>
            <Card className="threeImage">
              <Card.Img variant="top" src={details.ImageOne} />
              <Card.Body>
                <Card.Title>
                  <h5>{details.VitaminOne}</h5>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="threeImage">
              <Card.Img variant="top" src={details.ImageTwo} />
              <Card.Body>
                <Card.Title>
                  <h5>{details.VitaminTwo}</h5>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="threeImage">
              <Card.Img variant="top" src={details.ImageThree} />
              <Card.Body>
                <Card.Title>
                  <h5>{details.VitaminThree}</h5>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="allEatFoodName">
        <Row xs={4} className="g-4 my-4 mb-5">
          <Col>
            <Card className="fourImage">
              <Card.Img variant="top" src={details.ImageFour} />
              <Card.Body>
                <Card.Title>
                  <h5>{details.VitaminFour}</h5>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="fourImage">
              <Card.Img variant="top" src={details.ImageFive} />
              <Card.Body>
                <Card.Title>
                  <h5>{details.VitaminFive}</h5>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="fourImage">
              <Card.Img variant="top" src={details.ImageSix} />
              <Card.Body>
                <Card.Title>
                  <h5>{details.VitaminSix}</h5>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="fourImage">
              <Card.Img variant="top" src={details.ImageSeven} />
              <Card.Body>
                <Card.Title>
                  <h5>{details.VitaminSeven}</h5>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FoodDetails;
