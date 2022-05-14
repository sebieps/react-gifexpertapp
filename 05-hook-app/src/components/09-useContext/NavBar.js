import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const navLinkStyles = (isActive) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          useContext
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              style={navLinkStyles}
              className="nav-link active"
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
            <NavLink style={navLinkStyles} className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink style={navLinkStyles} className="nav-link" to="/about">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
