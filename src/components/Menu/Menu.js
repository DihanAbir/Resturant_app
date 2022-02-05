import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import MenuHeader from "../MenuHeader/MenuHeader";
import Products from "../Products/Products";

import ProductsDatas from "../Products/ProductsData";

function Menu({ setCartItem, cartItem, setFavArray, favArray }) {
  const [isActiveCat, setIsActiveCat] = React.useState("all");

  const ProductsD =
    isActiveCat === "all"
      ? ProductsDatas
      : ProductsDatas.filter((product) => product.category === isActiveCat);

  return (
    <div className="menu">
      {/* <MenuHeader /> */}
      <div className="container" style={{ padding: "20px 0px" }}>
        <Banner />
        <Category setIsActiveCat={setIsActiveCat} isActiveCat={isActiveCat} />
        <Products
          ProductsD={ProductsD}
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
