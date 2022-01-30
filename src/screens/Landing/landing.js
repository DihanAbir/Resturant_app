import { Grid } from "@mui/material";
import React from "react";
import Cart from "../../components/Cart/Cart";
import Menu from "../../components/Menu/Menu";

import "./landing.css";

function Landing() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <Menu />
      </Grid>
      <Grid item xs={3}>
        <Cart />
      </Grid>
    </Grid>
  );
}

export default Landing;
