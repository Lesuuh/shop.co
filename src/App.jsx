import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  // function to add to cart
  function addToCart(userSelection) {
    setCart((prevCartState) => {
      const updatedCart = [...prevCartState];
      const existingProductIndex = prevCartState.findIndex(
        (cartItem) =>
          cartItem.id === userSelection.id &&
          cartItem.size === userSelection.size &&
          cartItem.color === userSelection.color
      );

      if (existingProductIndex >= 0) {
        updatedCart[existingProductIndex].quantity = userSelection.quantity;
      } else {
        updatedCart.push({ ...userSelection });
      }

      console.log("Updated Cart:", updatedCart);
      return updatedCart;
    });
  }

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/products" element={<Products addToCart={addToCart} />} />
      <Route
        path="/products/:id"
        element={
          <ProductDetails cart={cart} setCart={setCart} addToCart={addToCart} />
        }
      />
      <Route path="/category" />
      <Route path="/cart" element={<Cart cart={cart} />} />
    </Routes>
  );
}

export default App;
