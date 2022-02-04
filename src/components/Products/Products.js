import React from "react";

import { Grid } from "@mui/material";

import Checkbox from "@mui/material/Checkbox";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import pizza from "../../assets/Rectangle 129.png";
import ProductsD from "./ProductsData";
import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

function Products({ setCartItem, cartItem, setFavArray, favArray }) {
  return (
    <div className="product">
      <p className=" titleLeft">View All</p>

      {/* products showcase  */}
      <Grid container spacing={2}>
        {ProductsD.map((product) => (
          <Product
            product={product}
            setCartItem={setCartItem}
            cartItem={cartItem}
            setFavArray={setFavArray}
            favArray={favArray}
          />
        ))}
      </Grid>

      {/* products showcase  */}
    </div>
  );
}

function Product({ product, setCartItem, cartItem, setFavArray, favArray }) {
  const [selectedValue, setSelectedValue] = React.useState("s");

  const [selected, setSelected] = React.useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const solid_price = 15.22;
  const priceTopins =
    selectedValue === "s"
      ? 2.22
      : selectedValue === "m"
      ? 5.22
      : selectedValue === "l"
      ? 9.22
      : 1.02;

  const price = priceTopins + solid_price;

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const updatedProduct = {
    ...product,
    newPrice: price,
    size: selectedValue,
  };

  let isFav;
  const favHandler = () => {
    setSelected(!selected);
    isFav = favArray.find((item) => item.id === product.id);
    !isFav && setFavArray([...favArray, product]);
  };

  console.log("cartItem", cartItem);
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
                  }}/> */}
                <Radio
                  {...controlProps("s")}
                  checked={selectedValue === "s" && true}
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
                  {...controlProps("m")}
                  checked={selectedValue === "m" && true}
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
                  {...controlProps("l")}
                  checked={selectedValue === "l" && true}
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
              {selected ? (
                <FavoriteIcon onClick={favHandler} />
              ) : (
                <FavoriteBorderIcon onClick={favHandler} />
              )}
            </div>
          </div>
          <div className="title">
            <b>Big Mac Burger</b>
          </div>
          <div className="price">
            <div>
              <small>$15.99</small>
              <b>${price}</b>
            </div>
            <div className="add">
              <AddCircleIcon
                onClick={() => setCartItem([...cartItem, updatedProduct])}
              />
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
export default Products;
