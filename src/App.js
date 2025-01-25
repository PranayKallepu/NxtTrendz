import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductItemDetails from "./components/ProductItemDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";
import CartContext from "./context/CartContext";
import { useState } from "react";
import "./App.css";

function App() {
  const [cartList, setCartList] = useState([]);
  const addCartItem = (product) => {
    setCartList((prevCartList) => [...prevCartList, product]);
  };
  const deleteCartItem = (productId) => {
    const updatedCartList = cartList.filter((item) => item.id !== productId);
    setCartList(updatedCartList);
  };
  const decreaseQuantity = (productId) => {
    setCartList((prevCartList) =>
      prevCartList.map((eachItem) =>
        eachItem.id === productId
          ? { ...eachItem, quantity: eachItem.quantity - 1 }
          : eachItem
      )
    );
  };
  const increaseQuantity = (productId) => {
    setCartList((prevCartList) =>
      prevCartList.map((eachItem) =>
        eachItem.id === productId
          ? { ...eachItem, quantity: eachItem.quantity + 1 }
          : eachItem
      )
    );
  };

  const clearCart = () => {
    setCartList([]);
  };

  return (
    <BrowserRouter>
      <CartContext.Provider
        value={{
          cartList,
          addCartItem,
          deleteCartItem,
          decreaseQuantity,
          increaseQuantity,
          clearCart,
        }}
      >
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={<ProtectedRoute element={<Home />} />}
          />
          <Route
            exact
            path="/products"
            element={<ProtectedRoute element={<Products />} />}
          />
          <Route
            exact
            path="/products/:id"
            element={<ProtectedRoute element={<ProductItemDetails />} />}
          />
          <Route
            exact
            path="/cart"
            element={<ProtectedRoute element={<Cart />} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
