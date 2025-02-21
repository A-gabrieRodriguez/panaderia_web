import React from 'react';
import './styles/menu.css';
import logo from './assets/designer.png'; // Importa la imagen

const App = (props) => {
  return (
    <>
      <header className='header'>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul className='nav-links'>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Productos</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;