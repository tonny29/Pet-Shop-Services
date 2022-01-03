import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [data, setData] = useState({})
  const handelOnBlur = e =>{
    const inputValue = e.target.name;
    const Value = e.target.value;
    const newData = {...data};
    newData[inputValue] = Value;
    setData(newData)
    console.log(newData);
  }
  const handelBtn = e =>{
    e.preventDefault()
  }
    return (
        <div>
            <div className="btn-style login-style row">
               
                <Col lg={12}>
                  <div className="input">
                  <h2>Login</h2>
                  <form onSubmit={handelBtn}>
                    <label htmlFor="email"></label>
                      <input
                       type="email"
                       placeholder='Enter your email'
                       id="email"
                       onBlur={handelOnBlur}
                         />
                      <br /><br />

                      <label htmlFor="password"></label>
                      <input type="password" placeholder='Enter your password'id="password"/>
                      <br /><br />
                      <input type="submit" value="Submit"/>
                      <br />
                  </form>
                    <p>haven't any account?<Link to='/register'>Create Account</Link></p>
                    <button className="button-style"><i class="fab fa-google"></i>{' '}Google Sign In</button>
                  </div>
               
                </Col>
            </div>
        </div>
    );
};

export default Login;