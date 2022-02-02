import { Grid } from "@mui/material";
import React from "react";
import Cart from "../../components/Cart/Cart";
import Menu from "../../components/Menu/Menu";

import "./landing.css";

function Landing() {
  return (
    <Grid container spacing={2}>
      <Grid item xl={10} lg={9} md={9} sm={10} xs={12}>
        <Menu />
      </Grid>
      <Grid item xl={2} lg={3} md={3} sm={1} xs={0} sx={{ padding: "0px" }}>
        <Cart />
      </Grid>
    </Grid>
  );
}

export default Landing;
