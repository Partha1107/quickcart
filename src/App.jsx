import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { products } from './data/products';
import './styles/App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + amount;
          return { ...item, quantity: Math.max(1, newQuantity) };
        }
        return item;
      })
    );
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <Header 
        cartCount={cartTotalItems} 
        onCartClick={toggleCart} 
      />
      <main className="main-content">
        <ProductList products={products} onAddToCart={addToCart} />
      </main>
      <Cart 
        isOpen={isCartOpen} 
        onClose={toggleCart} 
        cart={cart} 
        onRemove={removeFromCart} 
        onUpdateQuantity={updateQuantity} 
      />
    </div>
  );
}

export default App;