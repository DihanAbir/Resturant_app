import { Grid } from "@mui/material";
import React from "react";
import { cartData } from "../Favourite/favData";
import "./Cart.css";

function Cart() {
  return (
    <div className="cart">
      <div className="main">
        <Grid container spacing={2}>
          <Grid item xs={8} sm={8} md={8}>
            <h1 className="favTitle">My Cart</h1>
            {cartData.map((item) => (
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
        <Grid item xs={6} sm={8} md={8} sx={{ padding: "20px" }}>
          <div className="favDetails">
            <p className="small">#{id}</p>
            <p className="small">
              {time} | {date}
            </p>
            <p className="midium midumMargin" style={{ margin: "10px 0px" }}>
              {title}
            </p>
            <p className="small">
              <small
                style={{ marginRight: "5px", textDecoration: "line-through" }}
              >
                {" "}
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

export default Cart;
