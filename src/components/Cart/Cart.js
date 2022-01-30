import { Checkbox, Grid } from "@mui/material";
import React from "react";

import pizza from "../../assets/Rectangle 129.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Cart() {
  return (
    <>
      <div className="cartHeader">
        <p>My Cart</p>
      </div>

      {/* cart item  */}
      <div className="cartItem">
        <div className="card">
          <div className="img">{/* <img src={pizza} alt="" /> */}</div>
        </div>
        <div className="details">
          <b>Mushroom Pizza</b>
          <div style={{ display: "flex", alignItems: "center" }}>
            <small>X1</small>
            <span className="size">
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
                <input type="checkbox" name="" id="" />
                <p>S</p>
              </div>
              <div className="s">
                {" "}
                <input type="checkbox" name="" id="" />
                {/* <Checkbox
                  defaultChecked={false}
                  sx={{
                    color: "#AABBC6 ",
                    "&.Mui-checked": {
                      color: "#222831",
                    },
                  }}
                /> */}
                <p>S</p>
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
                <input type="checkbox" name="" id="" />
                <p>S</p>
              </div>
            </span>
            <small className="cardprice">$13.80</small>
          </div>
        </div>
        <div className="toogle">
          <p>
            <KeyboardArrowDownIcon />
          </p>
        </div>
      </div>

      <div className="extraAdons">
        <div>
          <input
            style={{ alignItems: "center" }}
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />
          <p>Sausage</p>
          <p>$1.25</p>
        </div>
        <div>
          <input
            style={{ alignItems: "center" }}
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />
          <p>Sausage</p>
          <p>$1.25</p>
        </div>
        <div>
          <input
            style={{ alignItems: "center" }}
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />
          <p>Sausage</p>
          <p>$1.25</p>
        </div>
        <div>
          <input
            style={{ alignItems: "center" }}
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />
          <p>Sausage</p>
          <p>$1.25</p>
        </div>
      </div>

      <hr />

      <div className="price">
        <b>Total Price</b>
        <b>$27.60</b>
      </div>

      <div className="checkoutButton">
        <button>Checkout</button>
      </div>
      {/* cart item  */}
    </>
  );
}

export default Cart;
