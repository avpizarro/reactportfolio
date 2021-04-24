import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <nav className="navbar fixed-top">
      <Link className="navbar-brand" to="/">
        Alejandra Valdes
      </ Link>
      <div className="navButtons">
        <Link className="nav-link" to="/about">
          About
        </Link>
        <a className="nav-link">|</a>
        <Link className="nav-link" to="/">
          Portfolio
        </Link>
        <a className="nav-link">|</a>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
export default Header;
