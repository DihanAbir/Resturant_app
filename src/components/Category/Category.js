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

function Category({ setIsActiveCat, isActiveCat }) {
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
          onClick={() => {
            setIsActiveCat("all");
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
          style={{
            backgroundColor:
              isCategory === "all" || isActiveCat === "all" ? "#000" : "white",
          }}
        >
          <img
            className="Allcat"
            src={
              isCategory === "all" || isActiveCat === "all" ? AllCatH : AllCat
            }
            alt=""
          />

          <span
            style={{
              color: isActiveCat === "all" ? "white" : "black",
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
          onClick={() => {
            setIsActiveCat("pizza");
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
          onClick={() => {
            setIsActiveCat("pizza");
          }}
          style={{
            backgroundColor:
              isCategory === "pizza" || isActiveCat === "pizza"
                ? "#000"
                : "white",
          }}
        >
          <img
            src={
              isCategory === "pizza" || isActiveCat === "pizza"
                ? PizzaH
                : PizzaCat
            }
            alt=""
          />
          <span
            style={{
              color: isActiveCat === "pizza" ? "white" : "black",
            }}
          >
            Pizza
          </span>
        </div>

        <div
          onMouseEnter={() => {
            setIsCategory("burger");
            setIsHover(false);
          }}
          
          onMouseLeave={() => setIsCategory("")}
          className="img"
          onClick={() => {
            setIsActiveCat("burger");
          }}
          style={{
            backgroundColor:
              isCategory === "burger" || isActiveCat === "burger"
                ? "#000"
                : "white",
          }}
        >
          <img
            src={
              isCategory === "burger" || isActiveCat === "burger"
                ? BurgerH
                : BurgerCat
            }
            alt=""
          />
          <span
            style={{
              color: isActiveCat === "sandwich" ? "white" : "black",
            }}
          >
            Burger
          </span>
        </div>

        <div
          onMouseEnter={() => {
            setIsCategory("sandwich");
            setIsHover(false);
          }}
          onClick={() => {
            setIsActiveCat("sandwich");
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
          onClick={() => {
            setIsActiveCat("sandwich");
          }}
          style={{
            backgroundColor:
              isCategory === "sandwich" || isActiveCat === "sandwich"
                ? "#000"
                : "white",
          }}
        >
          <img
            src={
              isCategory === "sandwich" || isActiveCat === "sandwich"
                ? SandwichH
                : SandwichCat
            }
            alt=""
          />
          <span
            style={{
              color: isActiveCat === "sandwich" ? "white" : "black",
            }}
          >
            Sandwich
          </span>
        </div>

        <div
          onMouseEnter={() => {
            setIsCategory("noodles");
            setIsHover(false);
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
          onClick={() => {
            setIsActiveCat("noodles");
          }}
          style={{
            backgroundColor:
              isCategory === "noodles" || isActiveCat === "noodles"
                ? "#000"
                : "white",
          }}
        >
          <img
            src={
              isCategory === "noodles" || isActiveCat === "noodles"
                ? NoodlesH
                : NoodlesCat
            }
            alt=""
          />
          <span
            style={{
              color: isActiveCat === "noodles" ? "white" : "black",
            }}
          >
            Noodles
          </span>
        </div>

        <div
          onMouseEnter={() => {
            setIsCategory("chicken");
            setIsHover(false);
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
          onClick={() => {
            setIsActiveCat("chicken");
          }}
          style={{
            backgroundColor:
              isCategory === "chicken" || isActiveCat === "chicken"
                ? "#000"
                : "white",
          }}
        >
          <img
            src={
              isCategory === "chicken" || isActiveCat === "chicken"
                ? ChickenH
                : ChickenCat
            }
            alt=""
          />
          <span
            style={{
              color: isActiveCat === "chicken" ? "white" : "black",
            }}
          >
            Chicken
          </span>
        </div>

        <div
          onMouseEnter={() => {
            setIsCategory("fish");
            setIsHover(false);
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
          onClick={() => {
            setIsActiveCat("fish");
          }}
          style={{
            backgroundColor:
              isCategory === "fish" || isActiveCat === "fish"
                ? "#000"
                : "white",
          }}
        >
          <img
            src={
              isCategory === "fish" || isActiveCat === "fish" ? fishH : fishCat
            }
            alt=""
          />
          <span
            style={{
              color: isActiveCat === "fish" ? "white" : "black",
            }}
          >
            Fish
          </span>
        </div>

        <div
          onMouseEnter={() => {
            setIsCategory("soup");
            setIsHover(false);
          }}
          onMouseLeave={() => setIsCategory("")}
          className="img"
          onClick={() => {
            setIsActiveCat("soup");
          }}
          style={{
            backgroundColor:
              isCategory === "soup" || isActiveCat === "soup"
                ? "#000"
                : "white",
          }}
        >
          <img
            src={
              isCategory === "soup" || isCategory === "soup" ? SoupH : SoupCat
            }
            alt=""
          />
          <span
            style={{
              color: isActiveCat === "soup" ? "white" : "black",
            }}
          >
            Soup
          </span>
        </div>
      </div>
    </div>
  );
}

export default Category;
