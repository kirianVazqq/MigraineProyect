import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="nav_logo">
        <a href="/">
          <img src="images/logocabeza.png" />
        </a>
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <a href="/home"> HOME</a>
        <a href="/info"> INFORMACIÓN</a>
        <a href="/form"> SEGUIMIENTO</a>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
export default Navbar;
