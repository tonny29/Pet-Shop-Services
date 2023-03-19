import React from "react";
import { Col } from "react-bootstrap";
import catHand from "../../petImage/hero_image_12.png";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <img src={catHand} alt="" />
      <div className="servicesList">
        <h1>
          {" "}
          <span style={{ color: "brown" }}>SERVICES FOR PETS</span>
          <br /> Should Have
        </h1>
        <p>
          They help us gain a sense of responsibility, show us unconditional
          love, and are always there when <br /> we need them. Dogs are more
          high maintenance but bring many different health benefits, whereas
          cats, <br /> rabbits and gerbils are easy to look after, need little
          exercise and give our lives new meaning and purpose.
        </p>
        <div className="row ">
          <Col lg={3}>
            <div className="services-style">
              <img
                src="https://media.istockphoto.com/photos/border-collie-in-a-kennel-picture-id173656433?k=20&m=173656433&s=612x612&w=0&h=OLtKcvFQVnYkQPnrQI2nK_du9iWnmHzsKIgQRCzukMs="
                alt=""
              />
              <hr/>
              <h4>Dog Boarding</h4>
              <hr/>
              <p>
                Many times on long journeys we can't take our pets with us so we
                have to leave them at the pet boarding center so that they have
                in under protection.
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="services-style">
              <img
                src="https://s36537.pcdn.co/wp-content/uploads/2019/06/Cat-with-sunglasses.jpg.optimal.jpg"
                alt=""
              />
               <hr/>
              <h4>Cat Boarding</h4>
              <hr/>
              <p>
                Many times on long journeys we can't take our pets with us so we
                have to leave them at the pet boarding center so that they have
                in under protection.
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="services-style">
              <img
                src="https://www.acontentbox.org/wp-content/uploads/2021/03/dog-grooming-scissors.jpg"
                alt=""
              />
               <hr/>
              <h4>Pet Grooming</h4>
              <hr/>
              <p>
                Pets should be dewormed, that is, they should be cleaned of fur,
                nails, and vaccinated and given medicine to avoid worms. Take
                the right time to the vet and provide services.
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="services-style">
              <img
                src="https://w7.pngwing.com/pngs/444/106/png-transparent-pet-sitting-pet-taxi-dog-cat-taxi-cartoon-mammal-pet-car-thumbnail.png"
                alt=""
              />
               <hr/>
              <h4>Pet Taxi</h4>
              <hr/>
              <p>
                If we ever go out with them, we have to use a carrier or travel
                in a pet taxi for their convenience. If necessary, contact the
                service provider and arrange a taxi for your pets.
              </p>
            </div>
          </Col>
        </div>
      </div>
      <br />
      <br />
      
      <br />
      <br />
      
    </div>
  );
};

export default Services;
