import React from "react";
import "../styles/Header.css";

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="brand">
          <h1 className="header-title">🛒 QuickCart</h1>
          <p className="header-subtitle">Your one-stop shop for everything</p>
        </div>
        <button className="cart-btn" onClick={onCartClick}>
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;

