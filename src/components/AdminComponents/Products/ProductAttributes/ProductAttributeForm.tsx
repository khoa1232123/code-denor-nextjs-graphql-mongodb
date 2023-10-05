import { InputField, InputTags } from "@/components";
import {
  AttributesDocument,
  CreateAttributeInput,
  UpdateAttributeInput,
} from "@/gql/graphql";
import {
  useCreateAttributeMutation,
  useUpdateAttributeMutation,
} from "@/gql/graphql-hooks";
import { LoadingButton } from "@mui/lab";
import { FormLabel } from "@mui/material";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  useEffect,
  useState,
} from "react";

type Props = {
  data: CreateAttributeInput | UpdateAttributeInput;
  setData: Dispatch<
    React.SetStateAction<CreateAttributeInput | UpdateAttributeInput>
  >;
};

const ProductAttributeForm = ({ data, setData }: Props) => {
  const {
    createAttribute,
    loading: createLoading,
    error: createError,
  } = useCreateAttributeMutation();
  const {
    updateAttribute,
    loading: updateLoading,
    error: updateError,
  } = useUpdateAttributeMutation();

  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    setTags(data.values || []);
  }, [data.values]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ data, tags });

    if ("id" in data && data.id !== "") {
      updateAttribute({
        variables: {
          updateAttributeInput: { ...data, values: tags },
        },
        refetchQueries: [AttributesDocument],
      }).then(() => {
        setData({});
        setTags([]);
      });
    } else {
      createAttribute({
        variables: {
          createAttributeInput: { ...data, values: tags },
        },
        refetchQueries: [AttributesDocument],
      }).then(() => {
        setData({});
        setTags([]);
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
          <FormLabel>Values</FormLabel>
          <InputTags tags={tags} setTags={setTags} placeholder="Values" />
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

export default ProductAttributeForm;
