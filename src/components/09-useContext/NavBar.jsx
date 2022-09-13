import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        useContext
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              className={`nav-link ${(props) =>
                props.isActive ? "active" : ""}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`nav-link ${(props) =>
                props.isActive ? "active" : ""}`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
