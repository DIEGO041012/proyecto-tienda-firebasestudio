import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

// Importa otros componentes de página aquí (ProductDetailPage, CheckoutPage, etc.)

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Agrega más rutas aquí para otras páginas */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
