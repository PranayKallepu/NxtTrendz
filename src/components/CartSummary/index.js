import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import {
  TotalAmountContainer,
  AmountSpan,
  PopupContainer,
  OrderButton,
  DisplayContainer,
} from "./styledComponent";

const CartSummary = () => {
  const { cartList } = useContext(CartContext);
  const totalAmount = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <TotalAmountContainer>
      <h4>
        Order Total:<AmountSpan> Rs {totalAmount}/-</AmountSpan>
      </h4>
      <p>
        <AmountSpan>{cartList.length}</AmountSpan> Items in Cart
      </p>
      {/* Order Popup Section */}
      <PopupContainer>
        <Popup
          model
          trigger={<OrderButton type="button">Order Now</OrderButton>}
        >
          {(close) => (
            <DisplayContainer>
              <div>
                <p>Order Placed</p>
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </button>
            </DisplayContainer>
          )}
        </Popup>
      </PopupContainer>
    </TotalAmountContainer>
  );
};

export default CartSummary;
