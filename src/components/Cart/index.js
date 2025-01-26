import Header from "../Header";
import CartListView from "../CartListView";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import EmptyCartView from "../EmptyCartView";
import CartSummary from "../CartSummary";
import {
  CartContainer,
  CartContentContainer,
  CartHeaderContainer,
  Heading,
} from "./styledComponent";

const Cart = () => {
  const { cartList, clearCart } = useContext(CartContext);
  const isEmptyCart = cartList.length === 0;

  const onClickClearItems = () => {
    clearCart();
  };

  return (
    <>
      <Header />
      <CartContainer>
        {isEmptyCart ? (
          <EmptyCartView />
        ) : (
          <CartContentContainer>
            <CartHeaderContainer>
              <Heading>My Cart</Heading>
              <button onClick={onClickClearItems} type="button">
                Remove all
              </button>
            </CartHeaderContainer>
            <CartListView />
            <CartSummary />
          </CartContentContainer>
        )}
      </CartContainer>
    </>
  );
};
export default Cart;
