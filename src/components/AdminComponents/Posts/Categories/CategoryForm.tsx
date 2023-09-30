import { InputField } from "@/components";
import {
  CategoriesDocument,
  CreateCategoryInput,
  UpdateCategoryInput,
} from "@/gql/graphql";
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "@/gql/graphql-hooks";
import { LoadingButton } from "@mui/lab";
import { FormLabel } from "@mui/material";
import React, { ChangeEvent, Dispatch, FormEvent } from "react";

type Props = {
  data: CreateCategoryInput | UpdateCategoryInput;
  setData: Dispatch<
    React.SetStateAction<CreateCategoryInput | UpdateCategoryInput>
  >;
};

const CategoryForm = ({ data, setData }: Props) => {
  const {
    createCategory,
    loading: createLoading,
    error: createError,
  } = useCreateCategoryMutation();

  const {
    updateCategory,
    loading: updateLoading,
    error: updateError,
  } = useUpdateCategoryMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ("id" in data && data.id !== "") {
      console.log("ngu 1");

      await updateCategory({
        variables: {
          updateCategoryInput: data,
        },
        refetchQueries: [CategoriesDocument],
      }).then(() => {
        setData({
          content: "",
          title: "",
        });
      });
    } else {
      console.log("ngu 2");
      await createCategory({
        variables: {
          createCategoryInput: data,
        },
        refetchQueries: [CategoriesDocument],
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

export default CategoryForm;
