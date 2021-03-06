import { Grid } from "@mui/material";
import React from "react";

import burger from "../../assets/Rectangle 128.png";
import pizza from "../../assets/Rectangle 129.png";

function Banner() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          <Image url={burger} />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Image url={pizza} />
        </Grid>
      </Grid>
    </>
  );
}

function Image({ url, alt = "alt" }) {
  return (
    <>
      <img src={url} alt={alt} />
    </>
  );
}

export default Banner;
