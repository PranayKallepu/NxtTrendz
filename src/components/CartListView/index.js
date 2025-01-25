import CartItem from "../CartItem";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartListView = () => {
  const { cartList } = useContext(CartContext);
  return (
    <ul>
      {cartList.map((eachItem) => (
        <CartItem key={eachItem.id} cartItemDetails={eachItem} />
      ))}
    </ul>
  );
};

export default CartListView;
