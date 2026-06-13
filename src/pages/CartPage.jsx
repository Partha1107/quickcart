import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty-page">
        <div className="empty-content">
          <span className="empty-icon">🛒</span>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" className="shop-now-btn">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Your Bag</h1>
      
      <div className="cart-layout">
        <div className="cart-items-section">
          {cart.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img src={item.image} alt={item.name} className="item-img" />
              <div className="item-details">
                <div className="item-header">
                  <h3 className="item-name">{item.name}</h3>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
                <p className="item-category">{item.category}</p>
                <div className="item-footer">
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
        </div>

        <div className="cart-summary-section">
          <div className="summary-card">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="free">FREE</span>
            </div>
            <hr />
            <div className="summary-row total">
              <span>Total</span>
              <span>${cartTotalPrice.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
            <Link to="/" className="continue-shopping">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
