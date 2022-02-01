import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Cart() {
  return (
    <div className="Sidecart">
      <div className="cartHeader">
        <p>My Cart</p>
      </div>

      {/* cart item  */}

      {[1, 2, 3].map((item) => (
        <CartItem />
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
          <button>Checkout</button>
        </div>
      </div>
      {/* cart item  */}
    </div>
  );
}

function CartItem() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
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
                <input type="checkbox" name="" id="" />
                <p>S</p>
              </div>
              <div className="s">
                <input type="checkbox" name="" id="" />
                <p>M</p>
              </div>
              <div className="s">
                <input type="checkbox" name="" id="" />
                <p>L</p>
              </div>
            </span>
            <small className="cardprice">$13.80</small>
          </div>
        </div>
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
      </div>

      <div className="extraAdons" style={{ display: toggle && "none" }}>
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
    </>
  );
}
export default Cart;