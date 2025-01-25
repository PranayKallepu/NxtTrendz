import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(243, 243, 243);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    border-bottom-style: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1110px;
  padding-top: 25px;
  padding-bottom: 25px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MobileLogoCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LargeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1110px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 110px;
  @media screen and (min-width: 768px) {
    width: 165px;
  }
`;

export const MobileBtn = styled.button`
  border: none;
  padding: 0px;
  background: transparent;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  flex: 1;
  list-style-type: none;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  text-decoration: none;
  margin: 10px;
  font-weight: 400;
  font-size: 16px;
`;
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #475569;
`;

export const LogoutImg = styled.img`
  width: 24px;
`;

export const LogoutBtn = styled.button`
  font-weight: 600;
  font-size: 10px;
  padding: 8px 16px;
  color: #ffffff;
  background-color: #0967d2;
  border: none;
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const MobileContent = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  background-color: #e6f6ff;
  flex: 1;
  list-style-type: none;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
`;
export const MobileLi = styled.li`
  margin: 0px;
  cursor: pointer;
`;
export const NavBarImage = styled.img`
  width: 24px;
`;
export const CountSpan = styled.span`
  background-color: #bfdbfe;
  color: #0967d2;
  font-size: 12px;
  font-weight: 500;
  border-radius: 50%;
  padding-left: 5px;
  padding-top: 2px;
  padding-right: 5px;
  padding-bottom: 2px;
  margin-left: 8px;
  @media screen and (min-width: 768px) {
    background-color: #e6f6ff;
  }
`;
