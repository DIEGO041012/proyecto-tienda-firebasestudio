import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Asegúrate de importar los estilos

function ProductCard({ product }) {
  return (
    <div className="card-product">
      <Link to={`/product/${product.id}`} className="flex flex-col h-full">
        <img src={product.image} alt={product.name} />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-price">${product.price.toFixed(2)}</p>
          <button className="card-button">Ver producto</button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
