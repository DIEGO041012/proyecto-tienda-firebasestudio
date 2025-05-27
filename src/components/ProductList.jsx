import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  return (
    <div className="card-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

