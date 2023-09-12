import { ProductVariant, VariantOption } from "@/gql/graphql";
import { useAttributesQuery } from "@/gql/graphql-hooks";
import { Autocomplete, Button, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {};
type ProductDataVariantProps = {
  variantPDs: ProductVariant[];
  setVariantPDs: Dispatch<SetStateAction<ProductVariant[]>>;
};
type ProductDataVariantOptionProps = {
  variantPDs: ProductVariant[];
  variantOptionPDs: VariantOption[];
  setVariantOptionPDs: Dispatch<SetStateAction<VariantOption[]>>;
};

const ProductData = (props: Props) => {
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

const ProductDataVariants = ({
  variantPDs,
  setVariantPDs,
}: ProductDataVariantProps) => {
  const { attributes } = useAttributesQuery();
  return (
    <>
      <div className="mb-4 product-data__select-attributes">
        <div className="row items-center">
          <div className="col-3">Chọn thuộc tính:</div>
          <div className="col-9">
            <Autocomplete
              multiple
              id="attributes"
              options={attributes || []}
              onChange={(e, newValue) => {
                const values: ProductVariant[] = [];
                newValue.map((it) => {
                  values.push({ attributeId: it.id, values: [] });
                });
                setVariantPDs(values);
              }}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="input-field"
                  variant="standard"
                  label=""
                  placeholder=""
                />
              )}
            />
          </div>
        </div>
      </div>
      {variantPDs &&
        variantPDs.length > 0 &&
        variantPDs.map((item) => {
          if (!attributes || attributes.length === 0) return;

          const idx = attributes?.findIndex((it) => item.attributeId === it.id);

          if (idx >= 0) {
            const attr = attributes?.[idx];

            return (
              <div
                key={item.attributeId}
                className="mb-4 product-data__select-attributes__item"
              >
                <div className="mb-2">{attr.title}</div>
                <Autocomplete
                  multiple
                  id="attributes"
                  options={attr.values || []}
                  getOptionLabel={(option) => option}
                  onChange={(e, newValue) => {
                    setVariantPDs((oldValue) => {
                      const idx = oldValue.findIndex(
                        (it) => it.attributeId === item.attributeId
                      );
                      oldValue[idx].values = newValue;
                      return oldValue;
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className="input-field"
                      variant="standard"
                      label=""
                      placeholder=""
                    />
                  )}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
    </>
  );
};

const ProductDataVariantOptions = ({
  variantPDs,
  variantOptionPDs,
  setVariantOptionPDs,
}: ProductDataVariantOptionProps) => {
  const [tabActive, setTabActive] = useState(0);

  const handleAddItem = () => {
    setVariantOptionPDs((oldValue) => [
      ...oldValue,
      {
        discount: 0,
        image: "",
        price: 0,
        published: true,
        quantity: 0,
        SKU: "",
        title: "",
        variants: [],
      },
    ]);
  };

  console.log({ variantPDs });

  return (
    <>
      <Button className="btn btn-info text-white mb-4" onClick={handleAddItem}>
        Add item
      </Button>
      <div className="accordion">
        {variantOptionPDs.map((item, index) => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${
                  tabActive === index ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => setTabActive(index)}
              >
                {item.SKU || "Variant Option #" + (index + 1)}
                {variantPDs.map((item) => (
                  <select key={item.attributeId} className="ms-2">
                    {item.values?.map((it) => (
                      <option>{it}</option>
                    ))}
                  </select>
                ))}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                tabActive === index ? "show" : ""
              }`}
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductData;
