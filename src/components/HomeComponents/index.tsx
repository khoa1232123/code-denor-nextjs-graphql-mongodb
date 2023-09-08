import React from "react";
import HomeSlider from "./HomeSlider";
import PopularCategories from "./PopularCategories";
import Banners from "./Banners";
import ProductTabs from "./ProductTabs";

type Props = {};

const HomeComponents = (props: Props) => {
  return (
    <div>
      <HomeSlider />
      <PopularCategories />
      <Banners />
      <ProductTabs />
    </div>
  );
};

export default HomeComponents;
