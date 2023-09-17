import { InputField } from "@/components";
import { ProductVariant, VariantOption } from "@/gql/graphql";
import { useAttributesQuery } from "@/gql/graphql-hooks";
import { Autocomplete, Button, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ProductDataVariants from "./ProductDataVariants";
import ProductDataVariantOptions from "./ProductDataVariantOptions";

type Props = {
  setVariants: Dispatch<SetStateAction<ProductVariant[]>>;
  setVariantOptions: Dispatch<SetStateAction<VariantOption[]>>;
};

const ProductData = ({ setVariantOptions, setVariants }: Props) => {
  const [tabActive, setTabActive] = useState("variants");
  const [variantPDs, setVariantPDs] = useState<ProductVariant[]>([]);
  const [variantOptionPDs, setVariantOptionPDs] = useState<VariantOption[]>([]);
  const tabData = [
    {
      title: "Thuộc tính",
      value: "variants",
    },
    {
      title: "Biến thể",
      value: "variantOptions",
    },
  ];

  useEffect(() => {
    setVariantOptions(variantOptionPDs);
  }, [variantOptionPDs]);

  useEffect(() => {
    setVariants(variantPDs);
  }, [variantPDs]);

  return (
    <div className="card mb-4 product-data">
      <div className="card-header">
        <h4 className="m-0">Product Data</h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <ul className="nav nav-tabs">
                {tabData.map((item, index) => (
                  <li
                    className="nav-item"
                    key={index + "product-data"}
                    onClick={() => setTabActive(item.value)}
                  >
                    <div
                      className={`nav-link ${
                        tabActive === item.value && "active"
                      }`}
                      aria-current="page"
                    >
                      {item.title}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav-item__content">
              <div
                className={`mb-4 ${tabActive !== "variants" ? "d-none" : ""}`}
              >
                <ProductDataVariants
                  variantPDs={variantPDs}
                  setVariantPDs={setVariantPDs}
                />
              </div>
              <div
                className={`mb-4 ${
                  tabActive !== "variantOptions" ? "d-none" : ""
                }`}
              >
                <ProductDataVariantOptions
                  setVariantOptionPDs={setVariantOptionPDs}
                  variantOptionPDs={variantOptionPDs}
                  variantPDs={variantPDs}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
