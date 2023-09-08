import { Product, ProductInfoFragment } from "@/gql/graphql";
import { Button, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

type Props = {
  product?: ProductInfoFragment | null;
};

const ProductCard = ({ product }: Props) => {
  const handleAddToCart = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  return (
    <div className="product-cart-wrap mb-24">
      <div className="product-img-action-wrap">
        <div className="product-img product-img-zoom">
          <a href={`/products/${product?.slug}`}>
            <img
              className="default-img"
              src="/assets-user/imgs/shop/product-1-1.jpg"
              alt=""
            />
            <img
              className="hover-img"
              src="/assets-user/imgs/shop/product-1-2.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="product-action-1">
          <a
            aria-label="Add To Wishlist"
            className="action-btn"
            href="shop-wishlist.html"
          >
            <i className="fi-rs-heart"></i>
          </a>
          <a
            aria-label="Compare"
            className="action-btn"
            href="shop-compare.html"
          >
            <i className="fi-rs-shuffle"></i>
          </a>
          <a
            aria-label="Quick view"
            className="action-btn"
            data-bs-toggle="modal"
            data-bs-target="#quickViewModal"
          >
            <i className="fi-rs-eye"></i>
          </a>
        </div>
        <div className="product-badges product-badges-position product-badges-mrg">
          <span className="hot">Hot</span>
        </div>
      </div>
      <div className="product-content-wrap">
        <div className="product-category">
          <a href="shop-grid-right.html">Snack</a>
        </div>
        <h2>
          <a href={`/products/${product?.slug}`}>{product?.title}</a>
        </h2>
        <div className="product-rate-cover">
          <div className="product-rate d-inline-block">
            <div className="product-rating" style={{ width: "90%" }}></div>
          </div>
          <span className="font-small ml-5 text-muted"> (4.0)</span>
        </div>
        <div>
          <span className="font-small text-muted">
            By <a href="vendor-details-1.html">{product?.user?.username}</a>
          </span>
        </div>
        <div className="product-card-bottom">
          <div className="product-price">
            <span>
              $
              {(product?.price || 0) -
                ((product?.discount || 0) * (product?.price || 0)) / 100}
            </span>
            <span className="old-price">${product?.price}</span>
          </div>
          <div className="add-cart">
            <a className="add" onClick={handleAddToCart}>
              <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
