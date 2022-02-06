import { Grid } from "@mui/material";
import React from "react";
import notData from "./notData";
import "./notification.css";

function Nottification() {
  return (
    <div className="notification">
      <div className="main">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <h1 className="favTitle">Nottification</h1>
            {notData.map((item) => (
              <SingleItem item={item} />
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function SingleItem({ item }) {
  const { des, title, image } = item;

  return (
    <div className="singleItme ">
      <Grid container>
        <Grid item xs={4} sm={4} md={4}>
          <div className="img">
            <img src={image} alt="product" className="favImg" />
          </div>
        </Grid>
        <Grid item xs={8} sm={8} md={8} sx={{ padding: "0" }}>
          <div className="favDetails">
            <p className="midium">{title}</p>
            <p className="small">{des}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Nottification;
