// index.js
import React from "react";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import {
  CartItemContainer,
  ProductImage,
  CartItemDetailsContainer,
  ProductTitleBrandContainer,
  ProductTitle,
  ProductBrand,
  QuantityContainer,
  QuantityControllerButton,
  Quantity,
  TotalPriceDeleteContainer,
  TotalPrice,
  RemoveButton,
  DeleteButton,
} from "./styledComponent";

const CartItem = (props) => {
  const { cartItemDetails } = props;
  const { title, brand, quantity, price, imageUrl, id } = cartItemDetails;
  const { deleteCartItem } = useContext(CartContext);
  const onClickDeleteButton = () => {
    deleteCartItem(id);
    console.log(`product Deleted ${id}`);
  };

  return (
    <CartItemContainer>
      <ProductImage src={imageUrl} alt={title} />
      <CartItemDetailsContainer>
        <ProductTitleBrandContainer>
          <ProductTitle>{title}</ProductTitle>
          <ProductBrand>by {brand}</ProductBrand>
        </ProductTitleBrandContainer>
        <QuantityContainer>
          <QuantityControllerButton type="button">
            <BsDashSquare color="#52606D" size={12} />
          </QuantityControllerButton>
          <Quantity>{quantity}</Quantity>
          <QuantityControllerButton type="button">
            <BsPlusSquare color="#52606D" size={12} />
          </QuantityControllerButton>
        </QuantityContainer>
        <TotalPriceDeleteContainer>
          <TotalPrice>Rs {price * quantity}/-</TotalPrice>
          <RemoveButton type="button" onClick={onClickDeleteButton}>
            Remove
          </RemoveButton>
        </TotalPriceDeleteContainer>
      </CartItemDetailsContainer>
      <DeleteButton type="button" onClick={onClickDeleteButton}>
        <AiFillCloseCircle color="#616E7C" size={20} />
      </DeleteButton>
    </CartItemContainer>
  );
};

export default CartItem;
