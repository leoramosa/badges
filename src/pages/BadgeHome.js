import React from "react";
import "./styles/BadgeHome.css";
import logo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";

import { Link } from "react-router-dom";

function BadgeHome() {
  return (
    <div className="BadgeHome__container">
      <div className="BadgeHome__text">
        <img src={logo} alt="" />
        <p className="BadgeHome__text-title">PRINT YOUR BADGES</p>
        <p className="BadgeHome__text-title-subtitle">
          The easiest way to manage your conference
        </p>
        <Link to="/badges" className="btn btn-primary BadgeHome__btn">
          Start now
        </Link>
      </div>
      <div>
        <img src={astronauts} alt="" />
      </div>
    </div>
  );
}

export default BadgeHome;
