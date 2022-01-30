import { Grid } from "@mui/material";
import React from "react";

// static image
import AllCat from "../../assets/category/all.svg";
import PizzaCat from "../../assets/category/pizza.svg";
import BurgerCat from "../../assets/category/burger.svg";
import SandwichCat from "../../assets/category/sandwich.svg";
import NoodlesCat from "../../assets/category/noodles.svg";
import ChickenCat from "../../assets/category/chicken.svg";
import fishCat from "../../assets/category/fish.svg";
import SoupCat from "../../assets/category/soup.svg";

function Category() {
  return (
    <div className="category">
      <p className="title">Category</p>

      <div className="categort_item">
        <div className="img">
          <img className="Allcat" src={AllCat} alt="" />
          <span>All</span>
        </div>

        <div className="img">
          <img src={PizzaCat} alt="" />
          <span>Pizza</span>
        </div>

        <div className="img">
          <img src={BurgerCat} alt="" />
          <span>Burger</span>
        </div>

        <div className="img">
          <img src={SandwichCat} alt="" />
          <span>Sandwich</span>
        </div>

        <div className="img">
          <img src={NoodlesCat} alt="" />
          <span>Noodles</span>
        </div>

        <div className="img">
          <img src={ChickenCat} alt="" />
          <span>Chicken</span>
        </div>

        <div className="img">
          <img src={fishCat} alt="" />
          <span>Fish</span>
        </div>

        <div className="img">
          <img src={SoupCat} alt="" />
          <span>Soup</span>
        </div>
      </div>
    </div>
  );
}

export default Category;
