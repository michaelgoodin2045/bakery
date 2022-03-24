import React, { createContext, useReducer } from 'react';
import { useContext } from 'react';
import { CartReducer, sumItems } from './CartReducer';

export const CartCtx = createContext();

const storage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const increase = (payload) => {
    dispatch({ type: 'INCREASE', payload });
  };
  const decrease = (payload) => {
    dispatch({ type: 'DECREASE', payload });
  };
  const removeProduct = (payload) => {
    dispatch({ type: 'REMOVE_ITEM', payload });
  };
  const addProduct = (payload) => {
    dispatch({ type: 'ADD_ITEM', payload });
  };
  const clearCart = (payload) => {
    dispatch({ type: 'CLEAR', payload });
  };
  const handleCheckout = () => {
    console.log('CHECKOUT', state);
    dispatch({ type: 'CHECKOUT' });
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    handleCheckout,
    ...state,
  };
  return <CartCtx.Provider value={contextValues}>{children}</CartCtx.Provider>;
};

export default CartContext;

export const CartState = () => {
  return useContext(CartCtx);
};
