import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { products } from '../data/products';
import { useSearch } from '../context/SearchContext';

function CategoryPage() {
  const { categoryName } = useParams();
  const { searchTerm } = useSearch();

  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  const filteredProducts = categoryProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (categoryProducts.length === 0) {
    return (
      <div className="empty-state">
        <h2>Category "{categoryName}" not found.</h2>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="category-page">
      <div className="category-header">
        <Link to="/" className="breadcrumb">Home</Link>
        <span className="separator">/</span>
        <span className="current-category">{categoryName}</span>
      </div>
      
      <ProductList 
        products={filteredProducts} 
        title={searchTerm ? `Searching in ${categoryName}` : `${categoryName} Collection`} 
      />

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <h3>No products found in this category matching your search.</h3>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
