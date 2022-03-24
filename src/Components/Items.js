import React from 'react';
import ItemCard from './ItemCard';

const Items = ({ filter, addToCart }) => {
  return (
    <div className="Items">
      <ItemCard filter={filter} addToCart={addToCart} />
    </div>
  );
};

export default Items;
