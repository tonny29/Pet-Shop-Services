import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <div className="btn-style contact-style row">
        <Col lg={12}>
          <div className="input">
            <form>
              <h2>Please Register </h2>
              <label htmlFor="frist"></label>
              <input
                type="name"
                name="name"
                placeholder="Full Name"
                id="frist"
              />
              <br />
              <br />
              <label htmlFor="mail"></label>
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                id="mail"
                required
              />
              <br />
              <br />
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                id="password"
                required
              />
              <br />
              <br />
              <input
                type="password2"
                name="password2"
                placeholder="re-enter your password"
                required
              />
              <br />
              <br />
              <input type="submit" value="Register" />
            </form>
            <p>
              Already have an account?<Link to="/login">Login</Link>
            </p>
            <button>
              <i class="fab fa-google"></i> Google Sign In
            </button>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Register;
