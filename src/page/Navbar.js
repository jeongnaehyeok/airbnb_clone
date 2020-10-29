import React from "react";

import "./Navbar.scss";

import Logo from "../components/navbar/Logo";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <dvi className="navbar__flexbox">
          <Logo />
        </dvi>
      </div>
    </div>
  );
};

export default Navbar;
