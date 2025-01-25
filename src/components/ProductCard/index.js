// index.js
import React from "react";
import {
  LinkItem,
  ProductItem,
  Thumbnail,
  Title,
  Brand,
  ProductDetails,
  Price,
  RatingContainer,
  Rating,
  Star,
} from "./styledComponent";

const ProductCard = (props) => {
  const { productData } = props;
  const { title, brand, imageUrl, rating, price, id } = productData;

  return (
    <LinkItem to={`/products/${id}`}>
      <ProductItem>
        <Thumbnail src={imageUrl} alt="product" />
        <Title>{title}</Title>
        <Brand>by {brand}</Brand>
        <ProductDetails>
          <Price>Rs {price}/-</Price>
          <RatingContainer>
            <Rating>{rating}</Rating>
            <Star
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
            />
          </RatingContainer>
        </ProductDetails>
      </ProductItem>
    </LinkItem>
  );
};

export default ProductCard;
