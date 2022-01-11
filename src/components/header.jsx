import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from 'react-router'
import logo from "../assets/images/logo.png";
import headset from "../assets/images/icons8-headset-32.png";
import notificatin from "../assets/images/Shape.png";
import user from "../assets/images/user-img.jpg";

function HeaderTop(props) {
  let history = useHistory()
  const onLogout = () => {
    localStorage.clear();
    history.push("/");
  }
    return (
      <React.Fragment>
        <header>
          <Link to="#" className="menu-icon d-block d-lg-none">
            <i className="fa fa-align-left" />
          </Link>
          <Link to="#" className="logo">
          Kfintech
          </Link>

          

          <div className="header-nav">
           <Dropdown className="user dropdown">
              <Dropdown.Toggle as="a" variant="">
                <img src={user} alt="" className="" />
                <i className="fa fa-angle-down" />
              </Dropdown.Toggle>
              <Dropdown.Menu
                as="ul"
                className="dropdown-menu user-dropdown"
                role="menu"
              >
                <li>
                  <Link to="#">
                    <i className="fa fa-gear" /> Setting
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-user-o" /> My Profile
                  </Link>
                </li>
                <li>
                <a 
                  style={{cursor:'pointer'}}              
                  onClick={onLogout}                 
                >
                   <i className="fa fa-send" /> Logout
                </a>
                
                </li>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </header>
      </React.Fragment>
    );
}

export default HeaderTop;
