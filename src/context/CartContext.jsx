import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let data = state.find((item) => item.id === action.payload.id);
      if (data) {
        return state;
        // data.quantity += action.payload.quantity;
        // console.log(data);
        // console.log(action.payload);
        // const index = state.findIndex((item) => item.id === action.payload.id);
        // const cart = state;
        // cart[index] = data;
        // localStorage.setItem("cart", JSON.stringify(cart));
        // return cart;
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([...state, action.payload])
        );
        return [...state, action.payload];
      }
    case "REMOVE_ITEM":
      localStorage.setItem(
        "cart",
        JSON.stringify(state.filter((item) => item.id !== action.payload.id))
      );
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEAR_ITEM":
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    default:
      return state;
  }
};

const showCartReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_CART":
      return true;
    case "HIDE_CART":
      return false;
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("cart") || "[]");

  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  const [showCart, showCartDispatch] = useReducer(showCartReducer, false);

  return (
    <CartContext.Provider
      value={{ cart, dispatch, showCart, showCartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartContext ");
  }
  return context;
};

export { CartProvider, useCart };
