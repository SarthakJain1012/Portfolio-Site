import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <a href="/" className="header__defaultbtn">
          SJ
        </a>
      </div>
      <div className="right">
        <a href="/about" className="header__btn">
          About
        </a>
        <a href="/project" className="header__btn">
          Project
        </a>
        <a href="" className="header__btn">
          Skill
        </a>
        <a href="/resume" className="header__btn">
          Resume
        </a>
        <a href="/contact" className="header__btn">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Header;
