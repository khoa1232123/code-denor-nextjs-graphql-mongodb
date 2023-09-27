import { ContentHeader, ProductAttributes } from "@/components/AdminComponents";

type Props = {};

const AttributePage = (props: Props) => {
  return (
    <>
      <ContentHeader title="Product Attributes" description="" />
      <ProductAttributes />
    </>
  );
};

export default AttributePage;
