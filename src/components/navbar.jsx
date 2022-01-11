import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink to="/" className="nav-item nav-link">
            Dashboard
          </NavLink>

          <NavLink to="/login" className="nav-item nav-link">
            Login
          </NavLink>

          <NavLink to="/signup" className="nav-item nav-link">
            Sign Up
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
