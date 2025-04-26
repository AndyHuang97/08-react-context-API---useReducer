import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
});
// this initialization is useful for code suggestions,
// but is not necessary because you still have to provide
// the initialization value for the context provider
