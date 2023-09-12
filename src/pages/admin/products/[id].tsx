import { ContentHeader, ProductForm } from "@/components/AdminComponents";
import React from "react";

type Props = {};

const EditProductPage = (props: Props) => {
  return (
    <>
      <ContentHeader title="Edit Product" description="" />
      <ProductForm />
    </>
  );
};

export default EditProductPage;
