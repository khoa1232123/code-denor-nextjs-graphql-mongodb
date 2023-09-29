import React, { useState } from "react";
import { CreateProductCatInput, UpdateProductCatInput } from "@/gql/graphql";
import ProductAttributeForm from "./ProductAttributeForm";
import ProductAttributeList from "./ProductAttributeList";

type Props = {};

const ProductAttributes = (props: Props) => {
  const [data, setData] = useState<
    CreateProductCatInput | UpdateProductCatInput
  >({});

  return (
    <section className="content">
      <div className="row">
        <div className="col-4">
          <ProductAttributeForm data={data} setData={setData} />
        </div>
        <div className="col-8">
          <ProductAttributeList setData={setData} />
        </div>
      </div>
    </section>
  );
};

export default ProductAttributes;
