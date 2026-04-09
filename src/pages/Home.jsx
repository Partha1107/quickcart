import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';
import { useSearch } from '../context/SearchContext';

function Home() {
  const { searchTerm } = useSearch();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <ProductList 
        products={filteredProducts} 
        title={searchTerm ? `Search results for "${searchTerm}"` : 'Our Products'} 
      />
      {filteredProducts.length === 0 && (
        <div className="no-results">
          <h3>No products found matching your search.</h3>
          <p>Try searching for something else!</p>
        </div>
      )}
    </div>
  );
}

export default Home;
