// styledComponent.js
import styled from "styled-components";

export const SimilarProductItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    width: 200px;
    margin-right: 64px;
  }
`;

export const ProductImage = styled.img`
  width: 200px;
  border-radius: 8px;
`;

export const ProductTitle = styled.p`
  color: #171f46;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
`;

export const ProductBrand = styled.p`
  color: #594d6d;
  font-family: "Roboto";
  font-size: 16px;
  margin-top: 6px;
`;

export const PriceRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const ProductPrice = styled.p`
  color: #171f46;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 700;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #3b82f6;
  border-radius: 6px;
  padding: 4px 8px;
`;

export const ProductRating = styled.p`
  color: #ffffff;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  margin-right: 4px;
  margin: 0;
`;

export const StarImage = styled.img`
  height: 14px;
  width: 14px;
`;
