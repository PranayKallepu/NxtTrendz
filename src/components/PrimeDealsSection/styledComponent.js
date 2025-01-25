import styled from "styled-components";

export const MainContainer = styled.div`
  min-width: 300px;
`;
export const Heading = styled.h1`
  color: #475569;
  font-size: 32px;
  font-weight: 500;
  margin-top: 48px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 100%;
  margin-top: 30px;
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
