import React, { Component } from "react";
import { Link } from "react-router-dom";
const LeftMenu = () => {
  return (
    <div className="left-navigation collapse-left">
      <nav>
        <ul>
          <li>
            <span>
              <span>DASHBOARD</span>
            </span>
          </li>
         
          <li className="active">
            <Link to="/Dashboard">
              <span>All Profiles</span>
            </Link>
          </li>
          <li className="">
            <Link to="/Profile">
              <span>My Profile</span>
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default LeftMenu;
