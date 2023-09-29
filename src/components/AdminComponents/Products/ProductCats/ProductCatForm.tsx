import { InputField } from "@/components";
import {
  CreateProductCatInput,
  ProductCatsDocument,
  UpdateProductCatInput,
} from "@/gql/graphql";
import {
  useCreateProductCatMutation,
  useUpdateProductCatMutation,
} from "@/gql/graphql-hooks";
import { Button, FormLabel } from "@mui/material";
import React, { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { LoadingButton } from "@mui/lab";

type Props = {
  data: CreateProductCatInput | UpdateProductCatInput;
  setData: Dispatch<
    React.SetStateAction<CreateProductCatInput | UpdateProductCatInput>
  >;
};

const ProductCatForm = ({ data, setData }: Props) => {
  const {
    createProductCat,
    loading: createLoading,
    error: createError,
  } = useCreateProductCatMutation();

  const {
    updateProductCat,
    loading: updateLoading,
    error: updateError,
  } = useUpdateProductCatMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ("id" in data && data.id !== "") {
      console.log("ngu 1");

      await updateProductCat({
        variables: {
          updateProductCatInput: data,
        },
        refetchQueries: [ProductCatsDocument],
      }).then(() => {
        setData({
          content: "",
          title: "",
        });
      });
    } else {
      console.log("ngu 2");
      await createProductCat({
        variables: {
          createProductCatInput: data,
        },
        refetchQueries: [ProductCatsDocument],
      }).then(() => {
        setData({
          content: "",
          title: "",
        });
      });
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <FormLabel>Title</FormLabel>
          <InputField
            name="title"
            className="input-field mb-2"
            onChange={handleChange}
            value={data?.title || ""}
          />
          <FormLabel>Content</FormLabel>
          <InputField
            name="content"
            textarea
            className="input-field mb-2 textarea"
            onChange={handleChange}
            value={data?.content || ""}
          />
          <LoadingButton
            loading={createLoading || updateLoading}
            type="submit"
            className="btn btn-md rounded font-sm btn-full"
          >
            Save
          </LoadingButton>
        </form>
      </div>
    </div>
  );
};

export default ProductCatForm;
