import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 'react-redux'
import { appAction } from '../_actions/action'


  function Signup (props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const signupData = useSelector((state) => state.signup);
    console.log(signupData, 'detailRamsignupData')
    const handleSubmit = (e) => {debugger
      e.preventDefault()
      var loginData = {
        
          "email": email,
          "password": password
      
      }
     
      dispatch(appAction.signup(loginData))
    }
    return (
      <div>
        <section className="login">
          <div className="login-form">
            <h2  className="logo">
              Kfintech
            </h2>
            <div className="white-box">
              <Form className="user-login">
                <h2 className="text-center">Sign Up</h2>
                <div className="Loading">
                  {
                    signupData && signupData.loading ? 'Loading...' : ''
                  }
                </div>
                <h6>{signupData && signupData.signup && signupData.signup.token ? <span style={{color:'green'}}>User created successfully</span> : 
                <span style={{color: 'red'}}>{signupData && signupData.signup && signupData.signup.error}</span> }
                </h6>
               <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                  onChange={(event) => setEmail(event.target.value)}
                  type="text" 
                  placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="loginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" 
                   onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>

                <div className="clearfix mt-2" />
               
                <Button onClick={handleSubmit} variant="primary">
                  Sign Up
                </Button>
                
              </Form>
            </div>
            <div class="sign-up mb-4 mt-4">
              Already have an account? <Link to={"/"}> Log In </Link>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Signup;
