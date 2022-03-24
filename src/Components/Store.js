import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import Items from './Items';
import Navbar from './Nav/Navbar';
import StoreMenu from './StoreMenu';

const Store = () => {
  const cartItemsFromLocalStorage = JSON.parse(
    localStorage.getItem('cartItems') || '[]'
  );

  const [filter, setFilter] = useState('all');
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);
  const [totalQty, setTotalQty] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const itemPresent = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemPresent) {
      setCartItems(
        cartItems.map((cartItem) => {
          return cartItem.id === item.id
            ? { ...itemPresent, qty: itemPresent.qty + 1 }
            : cartItem;
        })
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const itemPresent = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemPresent.qty === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) => {
          return cartItem.id === item.id
            ? { ...itemPresent, qty: itemPresent.qty - 1 }
            : cartItem;
        })
      );
    }
  };

  const handleOpenCart = () => {
    setOpenCart(true);
  };
  const handleCloseCart = () => {
    setOpenCart(false);
  };

  return (
    <div className="Store">
      <Navbar totalQty={totalQty} handleOpenCart={handleOpenCart} />
      <div className="title">
        <h1>
          <span className="gray">Our</span>
          <span className="pink"> Store!</span>
        </h1>
      </div>
      <StoreMenu setFilter={setFilter} />
      <Items filter={filter} addToCart={addToCart} />
      <Cart
        totalQty={totalQty}
        setTotalQty={setTotalQty}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
        openCart={openCart}
        handleCloseCart={handleCloseCart}
      />
    </div>
  );
};

export default Store;

/*
<Search
        category={category}
        filter={filter}
        setFilter={setFilter}
        searchFilter={searchFilter}
      />
      const [category, setCategory] = useState('');
  const [foundItems, setFoundItems] = useState(items);

  const searchFilter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = items.filter((item) => {
        return item.category.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundItems(results);
    } else {
      setFoundItems(items);
    }
  };
*/
