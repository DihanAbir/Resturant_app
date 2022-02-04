import React from "react";
import Grid from "@mui/material/Grid";

import Navbar from "../Navbar/Navbar";
import MenuHeader from "../MenuHeader/MenuHeader";

function Layout({ children }) {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Navbar />
        </Grid>
        <Grid item xs={11}>
          <div className="mainpage">
            <MenuHeader />
            <div style={{ height: "100%" }}>{children}</div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Layout;
