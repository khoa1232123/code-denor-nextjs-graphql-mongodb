import React, { useState } from "react";
import ProductCatList from "./ProductCatList";
import ProductCatForm from "./ProductCatForm";
import { CreateProductCatInput, UpdateProductCatInput } from "@/gql/graphql";

type Props = {};

const ProductCats = (props: Props) => {
  const [data, setData] = useState<
    CreateProductCatInput | UpdateProductCatInput
  >({
    content: "",
    title: "",
  });
  return (
    <section className="content">
      <div className="row">
        <div className="col-4">
          <ProductCatForm data={data} setData={setData} />
        </div>
        <div className="col-8">
          <ProductCatList setData={setData} />
        </div>
      </div>
    </section>
  );
};

export default ProductCats;
