import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
// import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import SearchPage from "./pages/SearchPage";
import CheckoutPage from "./pages/CheckoutPage";
import { useCartContext } from "./contexts/CartContext";

function App() {
  const { cart, setCart, addToCart, deleteFromCart, totalQuantity, subPrice } =
    useCartContext();

  return (
    <MainLayout totalQuantity={totalQuantity}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route
          path="/products/:id"
          element={
            <ProductDetails
              cart={cart}
              setCart={setCart}
              addToCart={addToCart}
            />
          }
        />
        <Route path="/category" />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              deleteFromCart={deleteFromCart}
              subPrice={subPrice}
            />
          }
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </MainLayout>
  );
}

export default App;
