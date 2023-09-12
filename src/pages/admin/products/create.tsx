import { ContentHeader, ProductForm } from "@/components/AdminComponents";
import Head from "next/head";
import React from "react";

type Props = {};

const CreateProductPage = (props: Props) => {
  return (
    <>
      <ContentHeader title="Create Product" description="">
        <div>
          <button className="btn btn-light rounded font-sm mr-5 text-body hover-up">
            Save to draft
          </button>
          <button className="btn btn-md rounded font-sm hover-up">
            Publich
          </button>
        </div>
      </ContentHeader>
      <ProductForm />
    </>
  );
};

export default CreateProductPage;
