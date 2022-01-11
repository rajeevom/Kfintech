import React, { useState } from "react";
import { Link , useLocation, Redirect} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 'react-redux'
import { appAction } from '../_actions/action'

  function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const location = useLocation()
    const loginError = useSelector((state) => state.login);
    const handleSubmit = (e) => {debugger
      e.preventDefault()
      var loginData = {
        
          "email": email,
          "password": password
      
      }
      const { from } = location.state || { from: { pathname: '/Dashboard' } }
      dispatch(appAction.login(loginData, from))
    }
    console.log(loginError, 'loginErrorRam')
    return (
      <div>
        <section className="login">
          {localStorage.getItem('userData') ? <Redirect to='/Dashboard' /> : null}
          <div className="login-form">
            <h2  className="logo">
              Kfintech
            </h2>
            <div className="white-box">
              <Form
               
              >
                <h2 className="text-center">Log In</h2>
                <div className="Loading">
                  {
                    loginError && loginError.loading ? 'Loading...' : ''
                  }
                </div>
                <Form.Group controlId="loginEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Email" 
                  onChange={(event) => setEmail(event.target.value)}/>
                </Form.Group>

                <Form.Group controlId="loginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                   onChange={(event) => setPassword(event.target.value)}
                  type="password" placeholder="Password" />
                </Form.Group>

                <div className="clearfix mt-2" />
                
                <div style={{marginBottom: '10px'}}><span style={{color: 'red'}}>
                    {
                      loginError && loginError.login? loginError.login.error : ''
                    }
                  </span></div>
                <Button variant="primary" onClick={handleSubmit}>
                  Login
                </Button>

                
              </Form>

             
            </div>
            <div className="sign-up mb-4 mt-4">
              Don’t have an account? <Link to={"/signup"}>Sign Up </Link>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Login;
