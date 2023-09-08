import { categoriesData } from "@/data";
import React from "react";

type Props = {};

const PopularCategories = (props: Props) => {
  return (
    <section className="popular-categories section-padding">
      <div className="container wow animate__animated animate__fadeIn">
        <div className="section-title">
          <div className="title">
            <h3>Featured Categories</h3>
          </div>
        </div>
        <div className="position-relative">
          <div className="row popular-categories__items">
            {categoriesData.map((item, index) => (
              <div className="col-xl-2" key={index}>
                <div className={`card-2 bg-${item.bg}`}>
                  <figure className="img-hover-scale overflow-hidden">
                    <a href={item.link}>
                      <img src={item.img} alt="" />
                    </a>
                  </figure>
                  <h6>
                    <a href={item.link}>{item.title}</a>
                  </h6>
                  <span>{item.countItems} items</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
