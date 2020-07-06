import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/home" className="logo">
      AUBOOK
    </Link>
  );
}

export default Logo;
