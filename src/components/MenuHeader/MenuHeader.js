import { Grid } from "@mui/material";
import React from "react";

import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";

function MenuHeader() {
  return (
    <div className="header">
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <div className="img">
            <img src={logo} alt="" />
          </div>
        </Grid>
        {/* <Grid item xs={7} style={{ paddingRight: "25px", alignSelf: "center" }}>
          <div className="search">
            <input placeholder="Search here" />

            <SearchIcon style={{ color: "#666" }} />
          </div>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default MenuHeader;
