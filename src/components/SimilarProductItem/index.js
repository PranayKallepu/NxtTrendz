// index.js
import React from "react";
import {
  SimilarProductItemWrapper,
  ProductImage,
  ProductTitle,
  ProductBrand,
  PriceRatingContainer,
  ProductPrice,
  RatingContainer,
  ProductRating,
  StarImage,
} from "./styledComponent";

const SimilarProductItem = (props) => {
  const { productDetails } = props;
  const { title, brand, imageUrl, rating, price } = productDetails;

  return (
    <SimilarProductItemWrapper>
      <ProductImage src={imageUrl} alt={`similar product ${title}`} />
      <ProductTitle>{title}</ProductTitle>
      <ProductBrand>by {brand}</ProductBrand>
      <PriceRatingContainer>
        <ProductPrice>Rs {price}/-</ProductPrice>
        <RatingContainer>
          <ProductRating>{rating}</ProductRating>
          <StarImage
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
          />
        </RatingContainer>
      </PriceRatingContainer>
    </SimilarProductItemWrapper>
  );
};

export default SimilarProductItem;
