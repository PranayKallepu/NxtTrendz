import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

export const ProductHeading = styled.h1`
  color: #475569;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;
export const SortContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const BsFilterRight = styled.img`
  width: 24px;
  height: 24px;
  color: #475569;
  margin-right: 6px;
`;
export const SortHeading = styled.h1`
  color: #475569;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: normal;
`;

export const Select = styled.select`
  color: #475569;
  background-color: #ffffff;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  border: none;
  padding: 12px;
  outline: none;
  cursor: pointer;
`;

export const Option = styled.option`
  color: #7e858e;
  font-family: "Roboto";
  font-size: 14px;
`;
