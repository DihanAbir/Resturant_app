import React, { useState } from "react";
import Cart from "../../components/Cart/Cart";
import Menu from "../../components/Menu/Menu";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Checkbox from "@mui/material/Checkbox";

import { NavLink } from "react-router-dom";
import { Grid, Radio } from "@mui/material";

import { ImCross } from "react-icons/im";

import "./landing.css";

function Landing({ favArray, setFavArray }) {
  const [cartItem, setCartItem] = useState([]);
  const [cartOn, setCartOn] = useState(false);

  console.log("cart cartItem", cartItem.length);

  const [totalPrice, setTotalPrice] = useState(0);

  const total = cartItem.reduce((total, prd) => total + prd?.newPrice, 0);

  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(1);

  const controlProps = (item) => ({
    // checked: selectedValue === item,
    // onChange: handleChange,
    // value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const itemPrice = 100;
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
          <Menu
            setCartItem={setCartItem}
            cartItem={cartItem}
            favArray={favArray}
            setFavArray={setFavArray}
          />
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={0} xs={0} sx={{ padding: "0px" }}>
          <Cart cartItem={cartItem} />
        </Grid>
        <Grid item xs={12} sx={{ padding: "0px" }}>
          <button onClick={() => setCartOn(!cartOn)} className="sm-cart">
            Cart
          </button>
          {cartOn && (
            <div className="sm-cartFull">
              <button
                style={{
                  border: "none",
                  background: "tomato",
                  color: "#fff",
                  padding: "10px 15px",
                  margin: "10px 15px",
                }}
                onClick={() => setCartOn(!cartOn)}
              >
                Hide
              </button>
              {/* <Cart cartItem={cartItem} /> */}
              {cartItem.length > 0 ? (
                <div className="lgSideCart">
                  <div className="cartHeader">
                    <p>My Cart</p>
                  </div>

                  {/* cart item  */}

                  {cartItem.length > 0 ? (
                    cartItem.map((item) => (
                      <div className="cartItem">
                        <Grid item xs={1}>
                          <div className="toogle">
                            <p>
                              <KeyboardArrowDownIcon
                                onClick={() => setCount(count + 1)}
                                style={{
                                  transform: "rotate(180deg)",
                                }}
                              />
                            </p>
                            <p>
                              <KeyboardArrowDownIcon
                                onClick={() => count > 1 && setCount(count - 1)}
                                style={{
                                  transform: "rotate(360deg)",
                                }}
                              />
                            </p>
                          </div>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid item xs={3} className="cartGridPadding">
                            <div className="card">
                              <div
                                style={{
                                  backgroundImage: `url( ${item.image})`,
                                }}
                                className="img"
                              >
                                {/* <img src={pizza} alt="" /> */}
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={7}>
                            <div className="details">
                              <b>{item?.title}</b>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <small>X {count}</small>
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
                                <small className="cardprice">
                                  ${itemPrice}
                                </small>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={1}>
                            <div className="toogle">
                              <p>
                                <ImCross />
                              </p>
                              <p>
                                <KeyboardArrowDownIcon
                                  onClick={() => setToggle(!toggle)}
                                  style={{
                                    transform: toggle
                                      ? "rotate(180deg)"
                                      : "rotate(360deg)",
                                  }}
                                />
                              </p>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    ))
                  ) : (
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      No Product added yet
                    </p>
                  )}

                  {/* cart item  */}
                  {/* cart footer  */}

                  {cartItem.length > 0 ? (
                    <div className="cartFooter">
                      <div className="priceDiv">
                        <hr />
                        <div className="price">
                          <b>Total Price</b>
                          <b>${total}</b>
                        </div>
                      </div>

                      <div className="checkoutButton">
                        <NavLink to="/payment">
                          <button>Checkout</button>
                        </NavLink>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                <div>Cart is empty</div>
              )}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
