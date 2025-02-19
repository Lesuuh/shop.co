// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { SearchProvider } from "./contexts/SearchContext.jsx";
import { GlobalContextProvider } from "./contexts/GlobalContext.jsx";
import { CartContextProvider } from "./contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartContextProvider>
      <GlobalContextProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </GlobalContextProvider>
    </CartContextProvider>
  </BrowserRouter>
);
