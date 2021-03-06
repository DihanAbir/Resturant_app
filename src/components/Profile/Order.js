import { Grid } from "@mui/material";
import React from "react";
import favData from "../../screens/Favourite/favData";

import "../../screens/Favourite/favourite.css";

function OrderComp() {
  return (
    <div className="favourite">
      <div className="main" style={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
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
    <div className="orderSingleItem singleItme">
      <Grid container>
        <Grid item xs={4} sm={4} md={4}>
          <img src={image} alt="product" className="favImg" />
        </Grid>
        <Grid item xs={6} sm={8} md={8} sx={{ padding: "20px" }}>
          <div className="favDetails">
            <p className="small">#{id}</p>
            <p className="small">
              {time} | {date}
            </p>
            <p className="midium" style={{ margin: "5px 0px 5px" }}>
              {title}
            </p>
            <p className="small">
              <small
                style={{ marginRight: "5px", textDecoration: "line-through" }}
              >
                ${oldPrice}
              </small>{" "}
              ${newPrice}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderComp;
