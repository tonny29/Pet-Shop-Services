import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import './Register.css';

const Register = () => {
    const [logindata, setloginData] = useState({});
  const {registerUser} = UseAuth();
  const handelOnBlur = e =>{
    const inputValue = e.target.name;
    const Value = e.target.value;
    const newData = {...logindata};
    newData[inputValue] = Value;
    setloginData(newData)
    console.log(newData);
  }
  const handelBtn = e =>{
    if(logindata.password !== logindata.password2){
      alert('did not password')
      e.terget.value = "";
    }
    registerUser(logindata.email, logindata.password)
    e.terget.value = "";
    e.preventDefault()
  }
    return (
        <div>
            
            <div className="btn-style contact-style row">
            <Col lg={6}>
            </Col>
                <Col lg={6}>
                    
                        <div className="input">
                        <form onSubmit={handelBtn}>
                            <h2>Please Register </h2>
                            <label htmlFor="frist"></label>
                            <input 
                            type="name"
                            name='name'
                            placeholder='Full Name'
                            onChange={handelOnBlur}
                            id="frist"/>
                            <br /><br />
                            <label htmlFor="mail"></label>
                            <input 
                            type="email"
                            name='email'
                            onChange={handelOnBlur}
                            placeholder='enter your email' 
                            id="mail" required/>
                            <br /><br />
                            <label htmlFor="password"></label>
                            <input 
                            type="password"
                            name='password'
                            onChange={handelOnBlur}
                            placeholder='enter your password'
                            id="password" required/>
                            <br /><br />
                           <input 
                           type="password2"
                           name='password2'
                           onChange={handelOnBlur}
                           placeholder='re-enter your password' required/>
                           <br /><br />
                           <input type="submit" value="Register" />
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