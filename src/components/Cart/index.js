import Header from "../Header";
import CartListView from "../CartListView";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import EmptyCartView from "../EmptyCartView";
import {
  CartContainer,
  CartContentContainer,
  CartHeaderContainer,
  Heading,
  TotalAmountCard,
  AmountSpan,
} from "./styledComponent";

const Cart = () => {
  const { cartList, clearCart } = useContext(CartContext);
  const isEmptyCart = cartList.length === 0;
  const totalAmount = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
            <TotalAmountCard>
              <h4>
                Order Total:<AmountSpan> Rs {totalAmount}/-</AmountSpan>
              </h4>
              <p>
                <AmountSpan>{cartList.length}</AmountSpan> Items in Cart
              </p>
              <button>Order Now</button>
            </TotalAmountCard>
          </CartContentContainer>
        )}
      </CartContainer>
    </>
  );
};
export default Cart;
