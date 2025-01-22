import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/productdetails" element={<ProductDetails />} />
      <Route path="/category" />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
