import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          {/* Agrega más enlaces de navegación aquí si es necesario */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
