import { Categories, ContentHeader } from "@/components/AdminComponents";
import React from "react";

type Props = {};

const CategoriesPage = (props: Props) => {
  return (
    <>
      <ContentHeader title="Post Categories" description="" />
      <Categories />
    </>
  );
};

export default CategoriesPage;
