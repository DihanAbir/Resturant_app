import React from "react";
import { Button, Grid } from "@mui/material";

import { BiHomeAlt } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

import pizza from "../../assets/Rectangle 129.png";

import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="upperBar">
        <NavLink to="/profile">
          <div style={{ marginTop: "10px" }} className="img">
            <img src={pizza} alt="" />
          </div>
        </NavLink>
        <div className="Sidemenu">
          <NavLink to="/">
            <p className="active">
              <BiHomeAlt />
            </p>
          </NavLink>
          <NavLink to="/favourite">
            <p>
              <MdOutlineFavoriteBorder />
            </p>
          </NavLink>

          <NavLink to="/cart">
            {" "}
            <p>
              <CgShoppingCart />
            </p>
          </NavLink>
          <NavLink to="/nottification">
            <p>
              <IoNotificationsOutline />
            </p>
          </NavLink>
        </div>
      </div>
      <p className="active">
        <BiHomeAlt />
      </p>
      {/* </div> */}
    </div>
  );
}

export default Navbar;
