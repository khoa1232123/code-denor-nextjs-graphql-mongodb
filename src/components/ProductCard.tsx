import { Product, ProductInfoFragment } from "@/gql/graphql";
import { Button, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

type Props = {
  product?: ProductInfoFragment | null;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 240 }}
        image="/images/product_card.jpg"
        title={product?.title}
      />
      <CardContent>
        <h4>{product?.title}</h4>
        <h5>{product?.price}</h5>
        <Button variant="contained" className="bg-blue-500">
          Add to card
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
