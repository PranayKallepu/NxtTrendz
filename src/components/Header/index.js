import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import {
  Nav,
  Content,
  MobileLogoCard,
  Logo,
  LargeCard,
  MobileBtn,
  NavList,
  NavItem,
  NavLink,
  LogoutImg,
  LogoutBtn,
  MobileContent,
  MobileUl,
  MobileLi,
  NavBarImage,
  CountSpan,
} from "./styledComponent";

const Header = () => {
  const navigate = useNavigate();
  const { cartList } = useContext(CartContext);
  const renderCartItemCount = () => {
    const cartItemsCount = cartList.length;
    return (
      <>{cartItemsCount > 0 ? <CountSpan>{cartItemsCount}</CountSpan> : null}</>
    );
  };
  //Handle Logout
  const handleLogout = () => {
    console.log("logout");
    Cookies.remove("jwt_token");
    alert("Are You Sure to Logout!");
    return navigate("/login", { replace: true });
  };
  return (
    <Nav>
      <Content>
        <MobileLogoCard>
          <NavLink to="/">
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </NavLink>
          <MobileBtn type="button" onClick={handleLogout}>
            <LogoutImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
            />
          </MobileBtn>
        </MobileLogoCard>
        <LargeCard>
          <NavLink to="/">
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </NavLink>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cart">Cart {renderCartItemCount()}</NavLink>
            </NavItem>
          </NavList>
          <LogoutBtn type="button" onClick={handleLogout}>
            Logout
          </LogoutBtn>
        </LargeCard>
      </Content>
      <MobileContent>
        <MobileUl>
          <MobileLi>
            <NavLink to="/">
              <NavBarImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
              />
            </NavLink>
          </MobileLi>
          <MobileLi>
            <NavLink to="/products">
              <NavBarImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
              />
            </NavLink>
          </MobileLi>
          <MobileLi>
            <NavLink to="/cart">
              <NavBarImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
              />
              {renderCartItemCount()}
            </NavLink>
          </MobileLi>
        </MobileUl>
      </MobileContent>
    </Nav>
  );
};

export default Header;
