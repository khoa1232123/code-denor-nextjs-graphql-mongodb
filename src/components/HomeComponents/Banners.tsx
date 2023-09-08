import { bannerData } from "@/data";
import React from "react";

type Props = {};

const Banners = (props: Props) => {
  return (
    <section className="banners mb-25">
      <div className="container">
        <div className="row">
          {bannerData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="banner-img">
                <img src={item.img} alt="" />
                <div className="banner-text">
                  <h4 dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                  <a href={item.link} className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banners;
