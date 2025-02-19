import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useCart = () => {
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
  const [userInputpromoCode, setUserInputPromoCode] = useState("");
  let deliveryFee = 10;
  let discountPercentage = 10;
  const promoCode = "DISCOUNT10";
  const [total, setTotal] = useState(subPrice + deliveryFee);
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  useEffect(() => {
    let discountAmount = 0;
    setTotal(subPrice + deliveryFee);
    if (isPromoApplied) {
      discountAmount = subPrice * (discountPercentage / 100);
      setDiscountedPrice(discountAmount);
      setTotal(subPrice - discountAmount + deliveryFee);
    }
  }, [subPrice, deliveryFee, discountPercentage, isPromoApplied]);

  const handlePromoChangeEvent = (e) => {
    const userPromoCode = e.target.value;
    setUserInputPromoCode(userPromoCode);
  };

  const handlePromoButton = (e) => {
    e.preventDefault();
    if (isPromoApplied) {
      return toast.info("Promo Code already applied");
    }
    if (userInputpromoCode !== promoCode) {
      toast.error("Invalid Promo Code");
    } else {
      setTotal(
        (prevTotal) => prevTotal - prevTotal * (discountPercentage / 100)
      );
      toast.success("CONGRATULATIONS, Promo Code Applied");
      setIsPromoApplied(true);
    }
  };

  // handle increment or decrement in cart
  const handleCartQuantityIncrement = (cartId) => {
    setCart((prevCartState) =>
      prevCartState.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const handleCartQuantityDecrement = (cartItem) => {
    const { cartId, quantity } = cartItem;
    if (quantity >= 2) {
      setCart((prevCartState) =>
        prevCartState.map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
      );
    }
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const handlePrice = (price, quantity) => {
    const subItemPrice = price * quantity;
    return subItemPrice;
  };

  const navigate = useNavigate();
  const goToCheckout = () => {
    if (cart.length !== 0) {
      navigate("/checkout");
    }
  };

  return {
    cart,
    setCart,
    addToCart,
    deleteFromCart,
    totalQuantity,
    subPrice,
    total,
    discountedPrice,
    handlePromoChangeEvent,
    handlePromoButton,
    handleCartQuantityDecrement,
    handleCartQuantityIncrement,
    handlePrice,
    goToCheckout,
    discountPercentage,
    isPromoApplied,
    deliveryFee,
  };
};

export default useCart;
