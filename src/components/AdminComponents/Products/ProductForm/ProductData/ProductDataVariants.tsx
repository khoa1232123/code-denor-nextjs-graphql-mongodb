import { InputTags } from "@/components";
import {
  ProductVariant,
  Attribute,
  AttributeInput,
  AttributeInfoFragment,
} from "@/gql/graphql";
import { useAttributesQuery } from "@/gql/graphql-hooks";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type ProductDataVariantProps = {
  variantPDs: ProductVariant[];
  setVariantPDs: Dispatch<SetStateAction<ProductVariant[]>>;
};

type ProductDataVariantsItemProps = {
  attributes?: AttributeInfoFragment[] | null;
  item: ProductVariant;
  setVariantPDs: Dispatch<SetStateAction<ProductVariant[]>>;
};

const ProductDataVariants = ({
  variantPDs,
  setVariantPDs,
}: ProductDataVariantProps) => {
  const { attributes } = useAttributesQuery({
    variables: {
      getAttributesInput: {
        limit: 50,
      },
    },
  });

  const [dataAttributes, setDataAttributes] = useState<AttributeInfoFragment[]>(
    []
  );

  const [valueAutoComplete, setValueAutoComplete] = useState<
    AttributeInfoFragment[]
  >([]);

  console.log({ variantPDs });

  useEffect(() => {
    if (attributes?.length) {
      setDataAttributes(attributes);
    }
  }, [attributes]);

  useEffect(() => {
    let arr: AttributeInfoFragment[] = [];
    variantPDs.forEach((item) => {
      const { attributeId, values, ...value } = item;
      const idx = attributes?.findIndex((it) => it.id === attributeId);
      let title = "";

      if ((idx || idx === 0) && idx >= 0 && attributes && attributes.length) {
        title = attributes[idx].title;
        console.log({ attribute: attributes?.[idx] });
      }

      arr.push({
        createdAt: "",
        id: attributeId,
        title: title || "",
        updatedAt: "",
        values: values || [],
        __typename: "Attribute",
        content: "",
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
        variantPDs.map((item) => (
          <ProductDataVariantsItem
            key={item.attributeId}
            attributes={attributes}
            item={item}
            setVariantPDs={setVariantPDs}
          />
        ))}
    </>
  );
};

const ProductDataVariantsItem = ({
  attributes,
  item,
  setVariantPDs,
}: ProductDataVariantsItemProps) => {
  if (!attributes || attributes.length === 0) return null;
  const [variantPD, setVariantPD] = useState<ProductVariant>({
    attributeId: "",
    values: [],
  });

  useEffect(() => {
    setVariantPD(item);
  }, [item]);

  const handleChange = (newValue: string[]) => {
    setVariantPDs((oldValue) => {
      const idx = oldValue.findIndex(
        (it) => it.attributeId === variantPD?.attributeId
      );
      oldValue[idx].values = newValue;
      console.log({ oldValue, newValue });

      return oldValue;
    });
    setVariantPD((oldValue) => {
      oldValue.values = newValue;

      return oldValue;
    });
    console.log({ newValue });

    return newValue;
  };

  console.log({ variantPD });

  const idx = attributes?.findIndex((it) => item.attributeId === it.id);

  // const { id, title, values } = attributes?.[idx];
  // const attr: AttributeVariant = {
  //   id,
  //   title,
  //   values: values || [],
  // };

  // console.log({ values: item.values });

  return (
    <div
      key={item.attributeId}
      className="mb-4 product-data__select-attributes__item"
    >
      <div className="mb-2">{attributes?.[idx].title}</div>
      <Autocomplete
        multiple
        id="attributes"
        options={attributes?.[idx].values || []}
        value={variantPD?.values || []}
        getOptionLabel={(option) => option}
        onChange={(e, newValue) => handleChange(newValue)}
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
};

export default ProductDataVariants;
