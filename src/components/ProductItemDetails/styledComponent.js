import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`;

export const ProductDetailsContainer = styled.div`
  width: 85%;
  max-width: 550px;

  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 1110px;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 48px;
  }
`;

export const SimilarProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 24px;
  }
`;

export const ProductImage = styled.img`
  border-radius: 16px;
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    width: 48%;
    max-width: 540px;
    max-height: 576px;
  }
`;

export const ProductInfo = styled.div`
  @media screen and (min-width: 768px) {
    width: 48%;
  }
`;

export const Heading = styled.h1`
  color: #3e4c59;
  margin-top: 24px;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-top: 0;
  }
`;

export const Price = styled.p`
  color: #171f46;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

//Rating & Review Section
export const RatingAndReviewsCount = styled.div`
  display: flex;
  align-items: center;
`;
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewsCount = styled.p`
  margin-left: 12px;
  color: #12022f;
  font-family: "Open Sans";
  font-size: 14px;
`;

//label value Section
export const LabelValueContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;
export const Label = styled.p`
  color: #171f46;
  font-size: 16px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const Value = styled.p`
  color: #616e7c;
  font-size: 16px;
  margin-top: 0;
  margin-left: 8px;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  margin-top: 16px;
  margin-bottom: 16px;
  color: #616e7c;
  line-height: 1.3;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Quantity = styled.p`
  font-size: 20px;
  margin: 0 24px;
`;

export const QuantityControllerButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
export const AddToCartButton = styled.button`
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) => (props.$isCartAdded ? "green" : "#3b82f6")};
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  outline: none;
  cursor: pointer;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 48px;
  }
`;

export const StyledButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  cursor: pointer;
`;

//Failure view
export const ProductDetailsErrorViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
export const ErrorViewImage = styled.img`
  width: 300px;
  height: 165px;
  @media screen and (min-width: 768px) {
    width: 540px;
    height: 290px;
  }
`;
export const ProductNotFoundH1 = styled.h1`
  color: #1e293b;
  font-size: 32px;
  font-weight: 500;
  margin-top: 48px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
//Loading view
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
