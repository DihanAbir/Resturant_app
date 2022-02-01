import React from "react";

import { Grid } from "@mui/material";

import Checkbox from "@mui/material/Checkbox";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import pizza from "../../assets/Rectangle 129.png";
import ProductsD from "./ProductsData";
import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

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
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <div style={{ padding: "10px" }} className="item">
        <div className="img">
          <img src={product.image} alt="" />
        </div>

        <div className="details">
          <div className="top">
            <div className="size">
              <div className="s">
                {/* <Checkbox
                  defaultChecked={false}
                  sx={{
                    color: "#AABBC6 ",
                    "&.Mui-checked": {
                      color: "#222831",
                    },
                  }}
                /> */}
                <Radio
                  {...controlProps("e")}
                  sx={{
                    color: "black",
                    padding: "0px",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
                <p>S</p>
              </div>
              <div className="s">
                {" "}
                {/* <Checkbox
                  defaultChecked={false}
                  sx={{
                    color: "#AABBC6 ",
                    "&.Mui-checked": {
                      color: "#222831",
                    },
                  }}
                /> */}
                <Radio
                  {...controlProps("f")}
                  sx={{
                    color: "black",
                    padding: "0px 10px",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
                <p>M</p>
              </div>
              <div className="s">
                {/* <Checkbox
                  defaultChecked
                  sx={{
                    color: "#AABBC6 ",
                    "&.Mui-checked": {
                      color: "#222831",
                    },
                  }}
                /> */}
                <Radio
                  {...controlProps("g")}
                  sx={{
                    color: "black",
                    padding: "0px 10px",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
                <p>L</p>
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
