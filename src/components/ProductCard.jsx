import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="flex flex-col items-center text-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mb-2 rounded"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-blue-600 text-md font-medium mb-2">${product.price.toFixed(2)}</p>
        <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Ver producto
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;
