import React, { useState } from "react";

// static image
import AllCat from "../../assets/category/all.svg";
import AllCatH from "../../assets/category/hover/Group.svg";

import PizzaCat from "../../assets/category/pizza.svg";
import PizzaH from "../../assets/category/hover/pixx.svg";

import BurgerCat from "../../assets/category/burger.svg";
import BurgerH from "../../assets/category/hover/Group (1).svg";

import SandwichCat from "../../assets/category/sandwich.svg";
import SandwichH from "../../assets/category/hover/Group (2).svg";

import NoodlesCat from "../../assets/category/noodles.svg";
import NoodlesH from "../../assets/category/hover/icon-park-outline_noodles.svg";

import ChickenCat from "../../assets/category/chicken.svg";
import ChickenH from "../../assets/category/hover/Group (3).svg";

import fishCat from "../../assets/category/fish.svg";
import fishH from "../../assets/category/hover/ph_fish.svg";

import SoupCat from "../../assets/category/soup.svg";
import SoupH from "../../assets/category/hover/Group (4).svg";

function Category() {
  const [isHover, setIsHover] = useState(false);
  const [isCategory, setIsCategory] = useState("");
  return (
    <div className="category">
      <p className="title">Category</p>

      <div className="categort_item">
        <div
          onMouseEnter={() => {
            setIsCategory("all");
            setIsHover(false);
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
        >
          <img
            className="Allcat"
            src={isCategory === "all" ? AllCatH : AllCat}
            alt=""
          />

          <span
            style={{
              transition: "all 0.5s ease",
            }}
          >
            All
          </span>
        </div>

        <div
          onMouseEnter={() => {
            setIsHover(false);
            setIsCategory("pizza");
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
        >
          <img src={isCategory === "pizza" ? PizzaH : PizzaCat} alt="" />
          <span>Pizza</span>
        </div>

        <div
          onMouseEnter={() => {
            setIsCategory("burger");
            setIsHover(false);
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
        >
          <img src={isCategory === "burger" ? BurgerH : BurgerCat} alt="" />
          <span>Burger</span>
        </div>

        <div
          onMouseEnter={() => {
            setIsCategory("sandwich");
            setIsHover(false);
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
        >
          <img
            src={isCategory === "sandwich" ? SandwichH : SandwichCat}
            alt=""
          />
          <span>Sandwich</span>
        </div>

        <div
          onMouseEnter={() => {
            setIsCategory("noodles");
            setIsHover(false);
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
        >
          <img src={isCategory === "noodles" ? NoodlesH : NoodlesCat} alt="" />
          <span>Noodles</span>
        </div>

        <div
          onMouseEnter={() => {
            setIsCategory("chicken");
            setIsHover(false);
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
        >
          <img src={isCategory === "chicken" ? ChickenH : ChickenCat} alt="" />
          <span>Chicken</span>
        </div>

        <div
          onMouseEnter={() => {
            setIsCategory("fish");
            setIsHover(false);
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
        >
          <img src={isCategory === "fish" ? fishH : fishCat} alt="" />
          <span>Fish</span>
        </div>

        <div
          onMouseEnter={() => {
            setIsCategory("soup");
            setIsHover(false);
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
        >
          <img src={isCategory === "soup" ? SoupH : SoupCat} alt="" />
          <span>Soup</span>
        </div>
      </div>
    </div>
  );
}

export default Category;
