import styled from "styled-components";

export const AllProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 100px;
  }
`;

export const AllProductsCard = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 30px;
    width: 70%;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const NoProductView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 64px;
  margin-top: 48px;
  @media screen and (min-width: 768px) {
    margin-left: 30px;
    width: 70%;
    padding-bottom: 0;
    margin-top: 0px;
  }
`;

export const NoProductImage = styled.img`
  width: 250px;
  height: 180px;
  @media screen and (min-width: 768px) {
    width: 459px;
    height: 315px;
  }
`;

export const NoProductHeading = styled.h1`
  color: #171f46;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 24px;
  }
`;

export const NoProductsDescription = styled.p`
  text-align: center;
  color: #64748b;
  font-family: "Roboto";
  font-size: 14px;
  width: 90%;
  max-width: 288px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
    font-size: 18px;
    width: 60%;
    max-width: 466px;
  }
`;
//FAILURE VIEW CSS
export const FailureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  padding-bottom: 64px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-left: 30px;
    width: 70%;
    padding-bottom: 0;
  }
`;

export const FailureImage = styled.img`
  width: 250px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 350px;
  }
`;

export const FailureHeading = styled.h1`
  color: #171f46;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const FailureDescription = styled.p`
  text-align: center;
  color: #64748b;
  font-family: "Roboto";
  font-size: 14px;
  width: 90%;
  max-width: 288px;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 60%;
    max-width: 466px;
  }
`;

//LOADER VIEW CSS
export const LoaderCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;
