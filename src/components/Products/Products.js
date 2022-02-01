import React from "react";

import { Grid } from "@mui/material";

import Checkbox from "@mui/material/Checkbox";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import pizza from "../../assets/Rectangle 129.png";
import ProductsD from "./ProductsData";

function Products() {
  return (
    <div className="product">
      <p className=" titleLeft">View All</p>

      {/* products showcase  */}
      <Grid container spacing={2}>
        {ProductsD.map((product) => (
          <Product product={product} />
        ))}
      </Grid>

      {/* products showcase  */}
    </div>
  );
}

function Product({ product }) {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <div className="item">
        <div className="img">
          <img src={product.image} alt="" />
        </div>

        <div className="details">
          <div className="top">
            <div className="size">
              <div className="s">
                <Checkbox
                  defaultChecked={false}
                  sx={{
                    color: "#AABBC6 ",
                    "&.Mui-checked": {
                      color: "#222831",
                    },
                  }}
                />
                <p>S</p>
              </div>
              <div className="s">
                {" "}
                <Checkbox
                  defaultChecked={false}
                  sx={{
                    color: "#AABBC6 ",
                    "&.Mui-checked": {
                      color: "#222831",
                    },
                  }}
                />
                <p>S</p>
              </div>
              <div className="s">
                <Checkbox
                  defaultChecked
                  sx={{
                    color: "#AABBC6 ",
                    "&.Mui-checked": {
                      color: "#222831",
                    },
                  }}
                />
                <p>S</p>
              </div>
            </div>
            <div className="favouriteP">
              <FavoriteBorderIcon />
            </div>
          </div>
          <div className="title">
            <b>Big Mac Burger</b>
          </div>
          <div className="price">
            <div>
              <small>$15.99</small>
              <b>$15.99</b>
            </div>
            <div className="add">
              <AddCircleIcon />
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
export default Products;
