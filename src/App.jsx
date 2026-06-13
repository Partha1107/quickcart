import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import './styles/App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <SearchProvider>
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryName" element={<CategoryPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </main>
          </div>
        </SearchProvider>
      </CartProvider>
    </Router>
  );
}


export default App;