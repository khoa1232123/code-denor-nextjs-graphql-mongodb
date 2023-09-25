import { ProductVariant, Attribute, AttributeInput } from "@/gql/graphql";
import { useAttributesQuery } from "@/gql/graphql-hooks";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type AttributeVariant = {
  id: string;
  title: string;
  values?: string[];
};

type ProductDataVariantProps = {
  variantPDs: ProductVariant[];
  setVariantPDs: Dispatch<SetStateAction<ProductVariant[]>>;
};

const ProductDataVariants = ({
  variantPDs,
  setVariantPDs,
}: ProductDataVariantProps) => {
  const { attributes } = useAttributesQuery();

  const [dataAttributes, setDataAttributes] = useState<AttributeVariant[]>([]);

  const [valueAutoComplete, setValueAutoComplete] = useState<
    AttributeVariant[]
  >([]);

  console.log({ dataAttributes, valueAutoComplete });

  useEffect(() => {
    let arr: AttributeVariant[] = [];
    attributes?.forEach((item) => {
      const { id, values, title } = item;
      arr.push({
        id,
        title: title,
        values: values || [],
      });
    });
    setDataAttributes(arr);
  }, [attributes]);

  useEffect(() => {
    let arr: AttributeVariant[] = [];
    variantPDs.forEach((item) => {
      const { attributeId, values } = item;
      const idx = attributes?.findIndex((it) => it.id === attributeId);
      let title = "";

      if ((idx || idx === 0) && idx >= 0 && attributes && attributes.length) {
        title = attributes[idx].title;
        console.log({ attribute: attributes?.[idx] });
      }

      arr.push({
        id: attributeId,
        title: title || "",
        values: values || [],
      });
    });
    console.log({ arr });

    setValueAutoComplete([...arr]);
  }, [variantPDs]);

  return (
    <>
      <div className="mb-4 product-data__select-attributes">
        <div className="row items-center">
          <div className="col-3">Chọn thuộc tính:</div>
          <div className="col-9">
            <Autocomplete
              multiple
              id="attributes"
              options={dataAttributes || []}
              value={valueAutoComplete}
              onChange={(e, newValue) => {
                const values: ProductVariant[] = [];
                newValue.map((it) => {
                  const idx = variantPDs.findIndex(
                    (itx) => itx.attributeId === it.id
                  );

                  console.log({ variantPDs });

                  let newVal: string[] = [];
                  if (idx >= 0) {
                    newVal = variantPDs[idx].values || [];
                  }
                  values.push({ attributeId: it.id, values: newVal });
                });
                setValueAutoComplete(newValue);
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
            const { id, title, values } = attributes?.[idx];
            const attr: AttributeVariant = {
              id,
              title,
              values: values || [],
            };

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
                  value={item.values || []}
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
