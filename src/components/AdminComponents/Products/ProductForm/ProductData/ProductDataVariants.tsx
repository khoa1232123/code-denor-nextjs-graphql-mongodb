import { ProductVariant } from "@/gql/graphql";
import { useAttributesQuery } from "@/gql/graphql-hooks";
import { Autocomplete, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type ProductDataVariantProps = {
  variantPDs: ProductVariant[];
  setVariantPDs: Dispatch<SetStateAction<ProductVariant[]>>;
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
                  const idx = variantPDs.findIndex(
                    (itx) => itx.attributeId === it.id
                  );
                  let newVal: string[] = [];
                  if (idx >= 0) {
                    newVal = variantPDs[idx].values || [];
                  }
                  values.push({ attributeId: it.id, values: newVal });
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
                      console.log({ oldValue, newValue });

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

export default ProductDataVariants;
