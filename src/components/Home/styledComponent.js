import styled from "styled-components";

export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 50px;
  width: 90%;
  max-width: 1110px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 96px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const DesktopImg = styled.img`
  width: 50%;
  max-width: 450px;
  margin-left: 85px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Heading = styled.h1`
  color: #1e293b;
  font-weight: bold;
  font-size: 30px;
  line-height: 1.2;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 46px;
    text-align: left;
  }
`;

export const MobileImg = styled.img`
  width: 206px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Description = styled.p`
  margin-top: 36px;
  font-size: 14px;
  line-height: 28px;
  color: #64748b;
  margin-bottom: 0;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 0;
    text-align: left;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 400;
  color: white;
  border: none;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 6px;
  background-color: #0967d2;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 150px;
    font-size: 16px;
  }
`;
