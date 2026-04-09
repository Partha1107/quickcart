import React from 'react';
import '../styles/Cart.css';

function Cart({ isOpen, onClose, cart, onRemove, onUpdateQuantity }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-cart" onClick={onClose}>&times;</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart-message">
              <p>Your cart is empty.</p>
              <button className="start-shopping" onClick={onClose}>Start Shopping</button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="cart-item-controls">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="quantity-btn"
                    >-</button>
                    <span className="cart-item-quantity">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="quantity-btn"
                    >+</button>
                  </div>
                </div>
                <button 
                  className="remove-item" 
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
