import { Grid } from "@mui/material";
import React, { useState } from "react";
import Cart from "../../components/Cart/Cart";
import Menu from "../../components/Menu/Menu";

import "./landing.css";

function Landing({ favArray, setFavArray }) {
  const [cartItem, setCartItem] = useState([]);
  return (
    <Grid container spacing={2}>
      <Grid item xl={10} lg={9} md={9} sm={11} xs={12}>
        <Menu
          setCartItem={setCartItem}
          cartItem={cartItem}
          favArray={favArray}
          setFavArray={setFavArray}
        />
      </Grid>
      <Grid item xl={2} lg={3} md={3} sm={1} xs={0} sx={{ padding: "0px" }}>
        <Cart cartItem={cartItem} />
      </Grid>
    </Grid>
  );
}

export default Landing;
