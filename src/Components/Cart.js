import React, { useEffect, useState } from 'react';
import avatar from '../assets/1.jpg';
import triangle from '../assets/triangle-fill-svgrepo-com.svg';
import MediaQuery from 'react-responsive';
import { formatDollars } from '../library/utils';

const Cart = ({
  cartItems,
  addToCart,
  removeFromCart,
  totalQty,
  setTotalQty,
  handleCloseCart,
  openCart,
}) => {
  const [cartEmpty, setCartEmpty] = useState(true);
  const totalAmount = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  useEffect(() => {
    setTotalQty(cartItems.reduce((a, c) => a + c.qty, 0));
  }, [totalQty, setTotalQty, cartItems]);

  useEffect(() => {
    if (totalQty > 0) {
      setCartEmpty(false);
    } else {
      setCartEmpty(true);
    }
  }, [totalQty]);

  return (
    <div className={`Cart ${openCart ? 'open' : ''}`}>
      <div className="container">
        <div className="top-bar">
          <div className="title">
            <h2>
              <span className="whitesmoke">Michael's Bakery</span>
            </h2>
          </div>
          <div className="customer-box">
            <div className="customer-image">
              <img src={avatar} alt="" />
            </div>
            <div className="customer-blurb">
              <p>
                <span className="login-text">Logged in as</span>{' '}
                <span className="username">fakenamehere</span>
                <span className="arrow">
                  <img src={triangle} alt="" className="rotate" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="product-container">
          <MediaQuery minWidth={740}>
            <div className="header">
              <div className="image-header">
                <h4>Image</h4>
              </div>
              <div className="product-header">
                <h4>Product</h4>
              </div>
              <div className="price-header">
                <h4>Price</h4>
              </div>
              <div className="total-header">
                <h4>Total</h4>
              </div>
            </div>
          </MediaQuery>
          <div className="items-container">
            {cartItems.map((item, index) => {
              return (
                <div className="item-line" key={index}>
                  <div className="item-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="item-product">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="item-numbers-box">
                    <div className="item-quantity">
                      <p>Qty: {item.qty}</p>
                    </div>
                    <div className="item-price">
                      <p>{formatDollars(item.price)}</p>
                    </div>
                    <div className="item-total">
                      <p>{formatDollars(item.qty * item.price)}</p>
                    </div>
                  </div>

                  <div className="delete-box">
                    <button
                      className="removeQty-btn"
                      onClick={() => removeFromCart(item)}
                    >
                      <svg
                        width="40"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="addQty-btn"
                      onClick={() => addToCart(item)}
                    >
                      <svg
                        width="40"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bottom-bar">
            <div
              className={`discount-code-container ${cartEmpty ? ' ' : ' show'}`}
            >
              <div className="discount-code-title">
                <h4>Discount Code</h4>
              </div>
              <div className="discount-form">
                <label htmlFor="discount" className="discount-label">
                  <p>
                    Enter your discount code to receive a discount on your total
                    order.
                  </p>
                </label>
                <div className="discount-input">
                  <input
                    type="text"
                    name="discount"
                    id="discount"
                    placeholder="Enter code"
                  />
                  <input type="submit" value="Redeem" className="submit-btn" />
                </div>
              </div>
            </div>
            <div className="checkout-container">
              <div className="cart-total-box">
                <p>
                  <span className="cart-total-label">Total</span>{' '}
                  <span className="cart-total-amount">
                    {formatDollars(totalAmount)}
                  </span>
                </p>
              </div>
              <div className="checkout-buttons">
                <button className="back-btn" onClick={handleCloseCart}>
                  Back to Shop
                </button>
                <button className="checkout-btn">Checkout Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
