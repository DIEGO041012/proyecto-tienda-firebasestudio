import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import productsData from '../data/products'; // Importa los datos de productos

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // En una aplicación real, aquí cargarías los productos desde una API
    setProducts(productsData);
  }, []);

  return (
    <div>
      <h2>Nuestros Productos</h2>
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;
