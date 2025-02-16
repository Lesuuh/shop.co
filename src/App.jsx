import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout";
import { ToastContainer, toast } from "react-toastify";
import SearchPage from "./pages/SearchPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  // loading cart from local storage
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(savedCart || []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // function to add to cart
  function addToCart(userSelection) {
    const cartId = userSelection.id + userSelection.color + userSelection.size;
    if (!userSelection.size || !userSelection.color) {
      return toast.error("Please select size and color");
    }
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
        updatedCart.push({ ...userSelection, cartId });
      }

      toast.success("Product Added to cart");
      console.log("Updated Cart:", updatedCart);
      return updatedCart;
    });
  }

  // function to delete from cart
  function deleteFromCart(cartItem) {
    const newCart = cart.filter(
      (item) =>
        item.id !== cartItem.id ||
        item.size !== cartItem.size ||
        item.color !== cartItem.color
    );
    setCart(newCart);
  }

  // getting the total quantity in cart
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  // getting the total price in cart
  const subPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
