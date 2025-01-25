import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 75vh;
  @media screen and (min-width: 768px) {
    min-height: 90vh;
  }
`;
export const CartContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1110px;
  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 1110px;
  }
`;

export const Heading = styled.h1`
  color: #3e4c59;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
export const AmountSpan = styled.span`
  color: #0967d2;
  font-family: "Roboto";
  font-size: 22px;
  font-weight: bold;
`;
