import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="your-image.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <button className="navbar-btn">Button 1</button>
        <button className="navbar-btn">Button 2</button>
      </div>
    </nav>
  );
};

export default Navbar;
