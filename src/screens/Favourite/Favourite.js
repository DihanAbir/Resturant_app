import { Grid } from "@mui/material";
import React from "react";
import favData from "./favData";
import "./favourite.css";

function Favourite({ favArray }) {
  return (
    <div className="favourite">
      <div className="main">
        <Grid container spacing={2}>
          <Grid item xs={8} md={12} xs={12}>
            <h1 className="favTitle">My Favourite</h1>
            {favArray.map((item) => (
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
          <div className="img">
            <img src={image} alt="product" className="favImg" />
          </div>
        </Grid>
        <Grid item xs={6} sm={8} md={8} sx={{ padding: "20px" }}>
          <div className="favDetails">
            <p className="small">#{id}</p>
            <p className="small">18.33 | 22.21</p>
            <p className="midium" style={{ margin: "10px 0px" }}>
              {title}
            </p>
            <p className="small">
              <small
                style={{ marginRight: "5px", textDecoration: "line-through" }}
              >
                ${oldPrice}
              </small>
              ${newPrice}
            </p>
            <b>Reorder</b>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Favourite;
