import React, { useState } from "react";

type Props = {};

const CategoryList = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreList, setMoreList] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMoreListClick = () => {
    setMoreList(!moreList);
  };

  return (
    <div className="main-categori-wrap d-none d-lg-block">
      <a
        className={`categories-button-active ${isOpen ? "open" : ""}`}
        onClick={handleOpenClick}
      >
        <span className="fi-rs-apps"></span> <span className="et">Browse</span>{" "}
        All Categories
        <i className="fi-rs-angle-down"></i>
      </a>
      <div
        className={`categories-dropdown-wrap categories-dropdown-active-large font-heading ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="d-flex categori-dropdown-inner">
          <ul>
            <li>
              <a href="shop-grid-right.html">
                {" "}
                <img
                  src="/assets-user/imgs/theme/icons/category-1.svg"
                  alt=""
                />
                Milks and Dairies
              </a>
            </li>
            <li>
              <a href="shop-grid-right.html">
                {" "}
                <img
                  src="/assets-user/imgs/theme/icons/category-2.svg"
                  alt=""
                />
                Clothing & beauty
              </a>
            </li>
            <li>
              <a href="shop-grid-right.html">
                {" "}
                <img
                  src="/assets-user/imgs/theme/icons/category-3.svg"
                  alt=""
                />
                Pet Foods & Toy
              </a>
            </li>
            <li>
              <a href="shop-grid-right.html">
                {" "}
                <img
                  src="/assets-user/imgs/theme/icons/category-4.svg"
                  alt=""
                />
                Baking material
              </a>
            </li>
            <li>
              <a href="shop-grid-right.html">
                {" "}
                <img
                  src="/assets-user/imgs/theme/icons/category-5.svg"
                  alt=""
                />
                Fresh Fruit
              </a>
            </li>
          </ul>
          <ul className="end">
            <li>
              <a href="shop-grid-right.html">
                {" "}
                <img
                  src="/assets-user/imgs/theme/icons/category-6.svg"
                  alt=""
                />
                Wines & Drinks
              </a>
            </li>
            <li>
              <a href="shop-grid-right.html">
                {" "}
                <img
                  src="/assets-user/imgs/theme/icons/category-7.svg"
                  alt=""
                />
                Fresh Seafood
              </a>
            </li>
            <li>
              <a href="shop-grid-right.html">
                {" "}
                <img
                  src="/assets-user/imgs/theme/icons/category-8.svg"
                  alt=""
                />
                Fast food
              </a>
            </li>
            <li>
              <a href="shop-grid-right.html">
                {" "}
                <img
                  src="/assets-user/imgs/theme/icons/category-9.svg"
                  alt=""
                />
                Vegetables
              </a>
            </li>
            <li>
              <a href="shop-grid-right.html">
                {" "}
                <img
                  src="/assets-user/imgs/theme/icons/category-10.svg"
                  alt=""
                />
                Bread and Juice
              </a>
            </li>
          </ul>
        </div>
        <div
          className="more_slide_open"
          style={{ display: moreList ? "block" : "none" }}
        >
          <div className="d-flex categori-dropdown-inner">
            <ul>
              <li>
                <a href="shop-grid-right.html">
                  {" "}
                  <img src="/assets-user/imgs/theme/icons/icon-1.svg" alt="" />
                  Milks and Dairies
                </a>
              </li>
              <li>
                <a href="shop-grid-right.html">
                  {" "}
                  <img src="/assets-user/imgs/theme/icons/icon-2.svg" alt="" />
                  Clothing & beauty
                </a>
              </li>
            </ul>
            <ul className="end">
              <li>
                <a href="shop-grid-right.html">
                  {" "}
                  <img src="/assets-user/imgs/theme/icons/icon-3.svg" alt="" />
                  Wines & Drinks
                </a>
              </li>
              <li>
                <a href="shop-grid-right.html">
                  {" "}
                  <img src="/assets-user/imgs/theme/icons/icon-4.svg" alt="" />
                  Fresh Seafood
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`more_categories ${moreList ? "show" : ""}`}
          onClick={handleMoreListClick}
        >
          <span className="icon"></span>{" "}
          <span className="heading-sm-1">Show more...</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
