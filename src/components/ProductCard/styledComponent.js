// styledComponent.js
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkItem = styled(Link)`
  text-decoration: none;
  margin-bottom: 48px;
  width: 300px;
  flex-grow: 0;
  flex-shrink: 1;
  margin-right: 20px;

  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 250px;
  }
`;

export const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.img`
  width: 100%;
  max-height: 350px;
  border-radius: 6px;
`;

export const Title = styled.h1`
  color: #171f46;
  font-size: 24px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const Brand = styled.p`
  color: #594d6d;
  font-size: 18px;
  margin-bottom: 6px;
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2px;
`;

export const Price = styled.p`
  color: #171f46;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #3b82f6;
  border-radius: 6px;
  padding: 6px 16px;
`;

export const Rating = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-right: 4px;
  margin: 0;
`;

export const Star = styled.img`
  height: 20px;
  width: 20px;
  margin-bottom: 3px;
`;
