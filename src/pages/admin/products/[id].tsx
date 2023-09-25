import { ContentHeader, ProductForm } from "@/components/AdminComponents";
import {
  UpdateProductInput,
  VariantOption,
  ProductVariant,
  ProductVariantInput,
  VariantOptionInput,
  CreateProductInput,
} from "@/gql/graphql";
import { useProductQuery } from "@/gql/graphql-hooks";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const EditProductPage = (props: Props) => {
  const {
    query: { id },
  } = useRouter();
  const [data, setData] = useState<UpdateProductInput | CreateProductInput>({
    id: "",
    content: "",
    discount: 0,
    image: "",
    price: 0,
    published: true,
    quantity: 0,
    title: "",
    type: "",
    variantOptions: [],
    variants: [],
  });
  const { product, loading, error } = useProductQuery({
    variables: {
      id: id as string,
    },
  });

  useEffect(() => {
    if (product) {
      const {
        id,
        content,
        discount,
        price,
        published,
        quantity,
        title,
        type,
        variants,
        variantOptions,
      } = product;
      setData({
        ...data,
        id,
        content,
        discount,
        price,
        published,
        quantity,
        title,
        type: type || "",
        variants: variants as ProductVariant[],
        variantOptions: variantOptions as VariantOption[],
      } as UpdateProductInput);
    }
  }, [product]);

  console.log({ data });

  return (
    <>
      <ContentHeader title="Edit Product" description="" />
      <ProductForm data={data} setData={setData} />
    </>
  );
};

export default EditProductPage;
