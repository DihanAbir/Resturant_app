import { Grid } from "@mui/material";
import React from "react";
import favData from "./favData";
import "./favourite.css";

function Favourite() {
  return (
    <div className="favourite">
      <div className="main">
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={6}>
            <h1 className="favTitle">My Favourite</h1>
            {favData.map((item) => (
              <SingleItem item={item} />
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function SingleItem({ item }) {
  const { id, date, time, title, image, oldPrice, newPrice } = item;

  return (
    <div className="singleItme">
      <Grid container>
        <Grid item xs={4} sm={4} md={4}>
          <img src={image} alt="product" className="favImg" />
        </Grid>
        <Grid item xs={6} sm={8} md={8} sx={{ padding: "0" }}>
          <div className="favDetails">
            <p className="small">#{id}</p>
            <p className="small">
              {time} | {date}
            </p>
            <p className="midium" style={{ marginBottom: "0px" }}>
              {title}
            </p>
            <p className="midium" style={{ marginBottom: "0px" }}>
              {oldPrice} {newPrice}
            </p>
            <b>Reorder</b>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Favourite;
