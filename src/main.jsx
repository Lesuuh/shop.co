// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { SearchProvider } from "./contexts/SearchContext.jsx";
import { GlobalContextProvider } from "./contexts/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalContextProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </GlobalContextProvider>
  </BrowserRouter>
);
