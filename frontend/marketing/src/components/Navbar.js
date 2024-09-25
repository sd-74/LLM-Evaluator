import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/png/logo-no-background.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="navbar-left">
        <button className="navbar-btn-hover">Product</button>
        <button className="navbar-btn-hover">Features</button>
        <button className="navbar-btn-hover">Pricing</button>
        <button className="navbar-btn-hover">Contact</button>
      </div>
      <div className="navbar-right">
        <button className="navbar-btn">Login</button>
        <button className="navbar-btn">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
