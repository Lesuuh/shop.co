/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import useCart from "../hooks/useCart";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const cartProperties = useCart();
  return (
    <CartContext.Provider value={cartProperties}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
