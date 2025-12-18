import React, { createContext, useEffect, useState } from "react";
import womenProducts from "../Components/Data/Womenproducts";
import menProducts from "../Components/Data/Menproducts";
import kidsProducts from "../Components/Data/Kidsproducts";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const allProducts = [
    ...womenProducts,
    ...menProducts,
    ...kidsProducts,
  ];

  // 🛒 Load cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : {};
  });

  // 💾 Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ➕ ADD
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // ➖ REMOVE (DECREASE)
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      const updated = { ...prev };

      if (updated[itemId] === 1) {
        delete updated[itemId];
      } else {
        updated[itemId] -= 1;
      }

      return updated;
    });
  };

  // 🔢 Navbar count
  const getTotalCartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      total += cartItems[item];
    }
    return total;
  };

  return (
    <ShopContext.Provider
      value={{
        allProducts,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartItems,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
