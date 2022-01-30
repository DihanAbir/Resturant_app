import React from "react";
import { Button, Grid } from "@mui/material";

import { BiHomeAlt } from "react-icons/bi";
import pizza from "../../assets/Rectangle 129.png";

import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="img">
        <img src={pizza} alt="" />
      </div>
      <p className="active">
        <BiHomeAlt />
      </p>
      <p>
        {" "}
        <BiHomeAlt />
      </p>
      <p>
        {" "}
        <BiHomeAlt />
      </p>
      <p>
        {" "}
        <BiHomeAlt />
      </p>
    </div>
  );
}

export default Navbar;
