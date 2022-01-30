import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import MenuHeader from "../MenuHeader/MenuHeader";
import Products from "../Products/Products";

function Menu() {
  return (
    <div
      style={{
        backgroundColor: "rgb(233 233 233)",
        height: "100%",
      }}
    >
      <MenuHeader />
      <div className="container" style={{ padding: "20px 0px" }}>
        <Banner />
        <Category />
        <Products />
      </div>
    </div>
  );
}

export default Menu;
