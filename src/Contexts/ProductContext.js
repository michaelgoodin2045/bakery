import React, { useState, createContext } from 'react';
import storeItems from '../data/items.json';

export const ProductCtx = createContext();

const ProductContext = ({ children }) => {
  const [items] = useState(storeItems);
  return <ProductCtx.Provider value={items}>{children}</ProductCtx.Provider>;
};

export default ProductContext;
