import { InputField } from "@/components";
import SelectField from "@/components/common/SelectField";
import {
  CreateProductInput,
  ProductVariant,
  UpdateProductInput,
  VariantOption,
} from "@/gql/graphql";
import { Form, Formik, FormikHelpers } from "formik";
import ProductData from "./ProductData";
import { ChangeEvent, FormEventHandler, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useUpdateProductMutation } from "@/gql/graphql-hooks";

type Props = {
  data: UpdateProductInput | CreateProductInput;
  setData: React.Dispatch<React.SetStateAction<CreateProductInput>>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

const ProductForm = ({ data, setData, onSubmit }: Props) => {
  const [variantOptions, setVariantOptions] = useState<VariantOption[]>([]);
  const [variants, setVariants] = useState<ProductVariant[]>([]);

  useEffect(() => {
    setData({ ...data, variantOptions });
  }, [variantOptions]);

  useEffect(() => {
    setData({ ...data, variants });
  }, [variants]);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    const type = e.target.type;

    let convertValue: string | number = value;
    if (type === "number") {
      convertValue = Number(value);
    }

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setData({ ...data, [name]: e.target.checked });
      return;
    }

    setData({ ...data, [name]: convertValue });
  };

  return (
    <section className="content">
      <form className="product-form__form" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-header">
                <h4 className="m-0">Basic</h4>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <label htmlFor="product_name" className="form-label">
                    Product title
                  </label>
                  <InputField
                    name="title"
                    className="input-field"
                    value={data.title}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Full description</label>
                  <InputField
                    name="content"
                    textarea
                    className="input-field textarea"
                    value={data.content}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <label className="form-label">Regular price</label>
                      <div className="row gx-2">
                        <InputField
                          name="price"
                          type="number"
                          className="input-field"
                          value={data.price}
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <label className="form-label">Discount</label>
                      <InputField
                        name="discount"
                        type="number"
                        className="input-field"
                        value={data.discount}
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <label className="form-label">Quantity</label>
                    <InputField
                      name="quantity"
                      type="number"
                      className="input-field"
                      value={data.quantity}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <label className="form-label">Type</label>
                    <SelectField
                      name="type"
                      className="input-field"
                      value={data.type}
                      onChange={handleOnChange}
                      options={[
                        {
                          title: "normal",
                          value: "normal",
                        },
                        {
                          title: "variant",
                          value: "variant",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>

            <ProductData
              setVariants={setVariants}
              setVariantOptions={setVariantOptions}
            />
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-header">
                <h4 className="m-0">Public</h4>
              </div>
              <div className="card-body">
                Published:{" "}
                <input
                  checked={data.published}
                  name="published"
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleOnChange}
                />
              </div>
              <div className="card-footer text-end">
                <Button
                  type="submit"
                  className="btn btn-md rounded font-sm hover-up btn-public"
                >
                  Save
                </Button>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">
                <h4 className="m-0">Media</h4>
              </div>
              <div className="card-body">
                <div className="input-upload">
                  <img src="/assets-admin/imgs/theme/upload.svg" alt="" />
                  <input className="form-control" type="file" />
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">
                <h4 className="m-0">Organization</h4>
              </div>
              <div className="card-body">
                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Category</label>
                    <select className="form-select">
                      <option>Automobiles</option>
                      <option>Home items</option>
                      <option>Electronics</option>
                      <option>Smartphones</option>
                      <option>Sport items</option>
                      <option>Baby and Tous</option>
                    </select>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Sub-category</label>
                    <select className="form-select">
                      <option>Nissan</option>
                      <option>Honda</option>
                      <option>Mercedes</option>
                      <option>Chevrolet</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_name" className="form-label">
                      Tags
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProductForm;
