import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import MenuHeader from "../MenuHeader/MenuHeader";
import Products from "../Products/Products";

function Menu({ setCartItem, cartItem, setFavArray, favArray }) {
  return (
    <div className="menu">
      {/* <MenuHeader /> */}
      <div className="container" style={{ padding: "20px 0px" }}>
        <Banner />
        <Category />
        <Products
          setCartItem={setCartItem}
          cartItem={cartItem}
          setFavArray={setFavArray}
          favArray={favArray}
        />
      </div>
    </div>
  );
}

export default Menu;
