import React from "react";
import { ProductCard } from "..";
import { useProductsQuery } from "@/gql/graphql-hooks";

type Props = {};

const ProductTabs = (props: Props) => {
  const { products, count, loading, error } = useProductsQuery({});

  return (
    <section className="product-tabs section-padding position-relative">
      <div className="container">
        <div className="section-title style-2 wow animate__animated animate__fadeIn">
          <h3>Popular Products</h3>
        </div>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active">
            <div className="row product-grid-4">
              {products &&
                products.length > 0 &&
                products.map((item, index) => (
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <ProductCard product={item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
