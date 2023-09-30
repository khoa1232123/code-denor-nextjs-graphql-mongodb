import React, { useState } from "react";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";
import { CreateCategoryInput, UpdateCategoryInput } from "@/gql/graphql";

type Props = {};

const Categories = (props: Props) => {
  const [data, setData] = useState<CreateCategoryInput | UpdateCategoryInput>({
    content: "",
    title: "",
  });

  return (
    <section className="content">
      <div className="row">
        <div className="col-4">
          <CategoryForm setData={setData} data={data} />
        </div>
        <div className="col-8">
          <CategoryList setData={setData} />
        </div>
      </div>
    </section>
  );
};

export default Categories;
