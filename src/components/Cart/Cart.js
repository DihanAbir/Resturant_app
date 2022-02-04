import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Checkbox from "@mui/material/Checkbox";

import { NavLink } from "react-router-dom";
import { Grid, Radio } from "@mui/material";

function Cart({ cartItem }) {
  console.log("cart cartItem", cartItem.length);
  return (
    <div className="Sidecart">
      <div className="lgSideCart">
        <div className="cartHeader">
          <p>My Cart</p>
        </div>

        {/* cart item  */}

        {cartItem.map((item) => (
          <CartItem item={item} />
        ))}

        {/* cart item  */}
        {/* cart footer  */}

        <div className="cartFooter">
          <div className="priceDiv">
            <hr />
            <div className="price">
              <b>Total Price</b>
              <b>$27.60</b>
            </div>
          </div>

          <div className="checkoutButton">
            <NavLink to="/payment">
              <button>Checkout</button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* cart item  */}
    </div>
  );
}

function CartItem({ item }) {
  const [toggle, setToggle] = useState(true);

  const controlProps = (item) => ({
    // checked: selectedValue === item,
    // onChange: handleChange,
    // value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <>
      <div className="cartItem">
        <Grid container spacing={2}>
          <Grid item xs={3} className="cartGridPadding">
            <div className="card">
              <div
                style={{ backgroundImage: `url( ${item.image})` }}
                className="img"
              >
                {/* <img src={pizza} alt="" /> */}
              </div>
            </div>
          </Grid>
          <Grid item xs={7}>
            <div className="details">
              <b>{item?.title}</b>
              <div style={{ display: "flex", alignItems: "center" }}>
                <small>X1</small>
                <span className="size">
                  <div className="s">
                    {/* <input type="checkbox" name="" id="" /> */}
                    <Radio
                      {...controlProps("s")}
                      checked={item.size === "s" && true}
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
                    <Radio
                      {...controlProps("s")}
                      checked={item.size === "m" && true}
                      sx={{
                        color: "black",
                        padding: "0px",
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />
                    <p>M</p>
                  </div>
                  <div className="s">
                    <Radio
                      {...controlProps("s")}
                      checked={item.size === "l" && true}
                      sx={{
                        color: "black",
                        padding: "0px",
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />
                    <p>L</p>
                  </div>
                </span>
                <small className="cardprice">${item?.newPrice}</small>
              </div>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div className="toogle">
              <p>
                <KeyboardArrowDownIcon
                  onClick={() => setToggle(!toggle)}
                  style={{
                    transform: toggle ? "rotate(180deg)" : "rotate(360deg)",
                  }}
                />
              </p>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="extraAdons" style={{ display: toggle && "none" }}>
        <div>
          {/* <input
            style={{ alignItems: "center" }}
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          /> */}
          <Checkbox
            defaultChecked={false}
            sx={{
              color: "#AABBC6 ",
              "&.Mui-checked": {
                color: "#222831",
              },
            }}
          />
          <p>Sausage</p>
          <p>$1.25</p>
        </div>
        <div>
          {/* <input
            style={{ alignItems: "center" }}
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          /> */}
          <Checkbox
            defaultChecked={false}
            sx={{
              color: "#AABBC6 ",
              "&.Mui-checked": {
                color: "#222831",
              },
            }}
          />
          <p>Sausage</p>
          <p>$1.25</p>
        </div>
        <div>
          {/* <input
            style={{ alignItems: "center" }}
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          /> */}
          <Checkbox
            defaultChecked={false}
            sx={{
              color: "#AABBC6 ",
              "&.Mui-checked": {
                color: "#222831",
              },
            }}
          />
          <p>Sausage</p>
          <p>$1.25</p>
        </div>
        <div>
          {/* <input
            style={{ alignItems: "center" }}
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          /> */}
          <Checkbox
            defaultChecked={false}
            sx={{
              color: "#AABBC6 ",
              "&.Mui-checked": {
                color: "#222831",
              },
            }}
          />
          <p>Sausage</p>
          <p>$1.25</p>
        </div>
      </div>
    </>
  );
}
export default Cart;
