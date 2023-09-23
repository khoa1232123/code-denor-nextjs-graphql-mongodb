import {
  ProductVariant,
  VariantOption,
  VariantOptionItem,
} from "@/gql/graphql";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Button, TextField } from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type Props = {
  variantPDs: ProductVariant[];
  variantOptionPDs: VariantOption[];
  setVariantOptionPDs: Dispatch<SetStateAction<VariantOption[]>>;
};

type ProductDataVariantOptionItemProps = {
  tabActive: number;
  stt: number;
  variantOption: VariantOption;
  variantPDs: ProductVariant[];
  setTabActive: Dispatch<SetStateAction<number>>;
  setVariantOptionPDs: Dispatch<SetStateAction<VariantOption[]>>;
  onClose?: (e: any) => void;
};

const ProductDataVariantOptions = ({
  variantPDs,
  variantOptionPDs,
  setVariantOptionPDs,
}: Props) => {
  const [tabActive, setTabActive] = useState(0);

  const handleAddItem = () => {
    if (variantPDs.length > 0) {
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
    }
  };

  console.log({ variantOptionPDs });

  const handleClose = (value: number) => {
    variantOptionPDs.splice(value, 1);
    setVariantOptionPDs([...variantOptionPDs]);
  };

  return (
    <>
      <Button className="btn btn-info text-white mb-2" onClick={handleAddItem}>
        <AddIcon />
        Add item
      </Button>
      <div className="accordion">
        {variantPDs.length > 0 &&
          variantOptionPDs.map((item, index) => (
            <ProductDataVariantOptionItem
              key={index}
              stt={index}
              tabActive={tabActive}
              variantPDs={variantPDs}
              variantOption={item}
              setTabActive={setTabActive}
              setVariantOptionPDs={setVariantOptionPDs}
              onClose={handleClose}
            />
          ))}
      </div>
    </>
  );
};

const ProductDataVariantOptionItem = ({
  tabActive,
  stt,
  variantOption,
  variantPDs,
  setTabActive,
  setVariantOptionPDs,
  onClose,
}: ProductDataVariantOptionItemProps) => {
  const [dataOptionItem, setDataOptionItem] = useState<VariantOption>({
    discount: 0,
    image: "",
    price: 0,
    published: true,
    quantity: 0,
    SKU: "",
    title: "",
    variants: [],
  });

  useEffect(() => {
    setDataOptionItem(variantOption);
  }, [variantOption]);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    let convertValue: string | number = "";

    if (type === "number") {
      convertValue = Number(value);
    } else {
      convertValue = value;
    }
    console.log({ type, value, convertValue, name });
    setDataOptionItem({ ...dataOptionItem, [name]: convertValue });
    setVariantOptionPDs((oldValue) => {
      oldValue[stt] = { ...dataOptionItem, [name]: convertValue };
      return oldValue;
    });
  };

  const handleChangeVariant = (
    item: ProductVariant,
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    let variantData: VariantOptionItem[] = dataOptionItem.variants;
    const idx = variantData.findIndex(
      (it) => it.attributeId === item.attributeId
    );

    if (idx >= 0) {
      variantData[idx] = {
        attributeId: item.attributeId,
        value: e.target.value,
      };
    } else {
      variantData.push({
        attributeId: item.attributeId,
        value: e.target.value,
      });
    }
    setVariantOptionPDs((oldValue) => {
      oldValue[stt] = { ...dataOptionItem, variants: variantData };

      return oldValue;
    });
  };

  const handleClose = () => {
    if (onClose) {
      onClose(stt);
    }
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button pt-1 pb-1 ${
            tabActive === stt ? "" : "collapsed"
          }`}
          type="button"
          onClick={() => setTabActive(stt)}
        >
          <div className="flex-center">
            {`#${stt + 1} - ${dataOptionItem.SKU || "Variant Option"}`}
          </div>
          <div className="flex-center">
            {variantPDs.map((item) => {
              if (!item.values || item.values?.length === 0) return;
              const idx = dataOptionItem.variants.findIndex(
                (it) => it.attributeId === item.attributeId
              );
              let defaultValue: string = "";
              if (idx >= 0) {
                defaultValue = dataOptionItem.variants[idx].value;
              }

              return (
                <select
                  key={item.attributeId}
                  className="ms-2 pe-2 ps-2 input-field w-auto"
                  onChange={(e) => handleChangeVariant(item, e)}
                  defaultValue={defaultValue || ""}
                >
                  <option value="">--Choose--</option>
                  {item.values?.map((it) => (
                    <option key={it} value={it}>
                      {it}
                    </option>
                  ))}
                </select>
              );
            })}
            <div onClick={handleClose} className="ms-2">
              <CloseIcon />
            </div>
          </div>
        </button>
      </h2>
      <div
        className={`accordion-collapse collapse bg-white ${
          tabActive === stt ? "show" : ""
        }`}
      >
        <div className="accordion-body pb-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-4">
                <label className="form-label">SKU</label>
                <div className="row gx-2">
                  <TextField
                    name="SKU"
                    type="text"
                    className="input-field"
                    value={dataOptionItem.SKU}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-4">
                <label className="form-label">Regular price</label>
                <div className="row gx-2">
                  <TextField
                    name="price"
                    type="number"
                    className="input-field"
                    value={dataOptionItem.price}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-4">
                <label className="form-label">Discount</label>
                <TextField
                  name="discount"
                  type="number"
                  className="input-field"
                  value={dataOptionItem.discount}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <label className="form-label">Quantity 2</label>
              <TextField
                name="quantity"
                type="number"
                className="input-field"
                value={dataOptionItem.quantity}
                onChange={handleOnChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDataVariantOptions;
