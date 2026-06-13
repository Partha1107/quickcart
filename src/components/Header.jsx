import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";
import "../styles/Header.css";

function Header() {
  const { cartTotalItems } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (window.location.pathname !== "/") {
      // If we are on a category page, search filters within it.
      // If we are on the cart page, maybe we should go back to home?
      if (window.location.pathname === "/cart") {
        navigate("/");
      }
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="brand" onClick={() => setSearchTerm("")}>
          <h1 className="header-title">🛒 QuickCart</h1>
        </Link>

        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <span className="search-icon">🔍</span>
        </div>

        <nav className="nav-links">
          <div className="dropdown">
            <button className="dropbtn">Categories</button>
            <div className="dropdown-content">
              <Link to="/category/Electronics">Electronics</Link>
              <Link to="/category/Accessories">Accessories</Link>
              <Link to="/category/Home">Home</Link>
              <Link to="/category/Sports">Sports</Link>
            </div>
          </div>
          
          <Link to="/cart" className="cart-btn">
            <span className="cart-icon">🛒</span>
            {cartTotalItems > 0 && <span className="cart-badge">{cartTotalItems}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;


