import Header from "../Header";
import CartListView from "../CartListView";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import EmptyCartView from "../EmptyCartView";
import {
  CartContainer,
  CartContentContainer,
  Heading,
  AmountSpan,
} from "./styledComponent";

const Cart = () => {
  const { cartList } = useContext(CartContext);
  const isEmptyCart = cartList.length === 0;
  const totalAmount = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <CartContainer>
        {isEmptyCart ? (
          <EmptyCartView />
        ) : (
          <CartContentContainer>
            <Heading>My Cart</Heading>
            <CartListView />
            <h3>
              Total Amount:
              <AmountSpan>{totalAmount}</AmountSpan>
            </h3>
          </CartContentContainer>
        )}
      </CartContainer>
    </>
  );
};
export default Cart;
