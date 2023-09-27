import React, { useState } from "react";
import { CreateProductCatInput, UpdateProductCatInput } from "@/gql/graphql";
import ProductAttributeForm from "./ProductAttributeForm";
import ProductAttributeList from "./ProductAttributeList";

type Props = {};

const ProductAttributes = (props: Props) => {
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
          <ProductAttributeForm />
        </div>
        <div className="col-8">
          <ProductAttributeList />
        </div>
      </div>
    </section>
  );
};

export default ProductAttributes;
