import React from "react";
import { Button, Grid, Link } from "@mui/material";

import { BiHomeAlt } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import pizza from "../../assets/Rectangle 129.png";

import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = React.useState(false);

  console.log("wind", window.location.pathname);
  return (
    <div>
      <div className="navbar">
        <div className="largeBar">
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
          <div className="logout">
            <p className="active">
              <FiLogOut />
            </p>
          </div>
        </div>

        <div className="smallNav">
          <div className="sm-menu menu2 menu-lg">
            <h2 className="toggleIcon" onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <MenuOpenIcon
                  style={{ fontSize: "3rem", marginLeft: "-60%" }}
                />
              ) : (
                <MenuIcon style={{ fontSize: "3rem", marginLeft: "-60%" }} />
              )}
            </h2>
          </div>
        </div>
        {/* </div> */}
      </div>
      {toggle && (
        <div
          className="mid-nav"
          style={{ top: toggle && "10%", transition: "0.4s ease-in-out" }}
        >
          <div className="upperBar">
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
          <div className="logout">
            <p className="active">
              <FiLogOut />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
