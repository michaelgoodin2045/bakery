import React from 'react';
import cartIcon from '../assets/shopping-cart-svgrepo-com.svg';
import items from '../data/items.json';

const ItemCard = ({ filter, addToCart }) => {
  return (
    <>
      {items
        .filter((item) => item.category === filter || filter === 'all')
        .map((item, index) => {
          return (
            <div className="ItemCard" key={index}>
              <div className="image-box">
                <div className="item-image">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="cart-box" onClick={() => addToCart(item)}>
                  <img src={cartIcon} alt="" />
                </div>
              </div>

              <div className="item-info">
                <div className="item-name">{item.name}</div>
                <div className="item-price">${item.price.toFixed(2) / 100}</div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ItemCard;
