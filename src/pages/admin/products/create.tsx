import { ContentHeader, ProductForm } from "@/components/AdminComponents";
import { CreateProductInput, ProductsDocument } from "@/gql/graphql";
import { useCreateProductMutation } from "@/gql/graphql-hooks";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

type Props = {};

const CreateProductPage = (props: Props) => {
  const router = useRouter();
  const { createProduct, error, loading } = useCreateProductMutation();
  const [dataList, setDataList] = useState<CreateProductInput>({
    content: "",
    discount: 0,
    price: 0,
    image: "",
    published: true,
    quantity: 0,
    title: "",
    type: "normal",
    variantOptions: [],
    variants: [],
  });

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ dataList });

    const res = await createProduct({
      variables: {
        createProductInput: dataList,
      },
      refetchQueries: [ProductsDocument],
    });

    if (!res.data?.createProduct.success) {
      console.log("error");
    } else {
      console.log("success");
      router.push("/admin/products");
    }
  };

  return (
    <>
      <ContentHeader title="Create Product" description="" />
      <ProductForm
        data={dataList}
        setData={setDataList}
        onSubmit={handleOnSubmit}
      />
    </>
  );
};

export default CreateProductPage;
