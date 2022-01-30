import React from "react";
import Grid from "@mui/material/Grid";

import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Navbar />
        </Grid>
        <Grid item xs={11}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}

export default Layout;
