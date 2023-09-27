import {
  ContentHeader,
  ProductCatList,
  ProductCats,
} from "@/components/AdminComponents";
import { CreateProductInput, ProductsDocument } from "@/gql/graphql";
import { useCreateProductMutation } from "@/gql/graphql-hooks";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

type Props = {};

const ProductCatPage = (props: Props) => {
  return (
    <>
      <ContentHeader title="Product Categories" description="" />
      <ProductCats />
    </>
  );
};

export default ProductCatPage;
