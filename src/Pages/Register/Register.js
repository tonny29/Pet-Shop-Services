import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>this is register page</h1>
            <div className="btn-style contact-style row">
            <Col lg={6}>
            </Col>
                <Col lg={6}>
                    
                        <div className="input">
                        <form>
                            <h2>Please Sign In </h2>
                            <label htmlFor="frist"></label>
                            <input type="name" placeholder=' frist name'id="frist"/>
                            <br /><br />
                            <label htmlFor="last"></label>
                            <input type="email" placeholder='last name' id="last" />
                            <br /><br />
                            <label htmlFor="mail"></label>
                            <input type="email" placeholder='enter your email' id="mail" required/>
                            <br /><br />
                            <label htmlFor="password"></label>
                            <input type="password" placeholder='enter your password' id="password" required/>
                            <br /><br />
                           <input type="password" placeholder='re-enter your password' required/>
                        </form>
                        <p>Already have an account?<Link to="/login">Login</Link></p>
                        <button> Google Sign In</button>
                        </div>
                    
                
                </Col>
        </div>
        </div>
    );
};

export default Register;