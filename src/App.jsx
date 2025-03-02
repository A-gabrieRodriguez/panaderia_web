import React from 'react';
import './styles/menu.css';
import logo from './assets/designer.png';

const App = () => {
  return (
    <div>
      {/* Sección de la imagen de fondo */}
      <div className="hero-section">
        <header className="header">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Productos</a></li>
            </ul>
          </nav>
        </header>
        <h1 className="title-lafuente">Panadería y repostería</h1>
        <h1 className="title-lafuente2">LA FUENTE</h1>
      </div>

      {/* Primer card */}
      <div className="cards_container">
        <div className="card-section">
          <div className="information-bakery">
            <h1>¡Calidad en nuestros productos!</h1>
            <p>
              En La Fuente nos preocupamos por la calidad de nuestros productos.
              Por ello, utilizamos ingredientes naturales y de primera calidad.
              Nuestros productos son elaborados diariamente para garantizar su frescura y sabor.
              En La Fuente encontrarás una gran variedad de productos, desde panes y pasteles
              hasta galletas y cupcakes. ¡Ven y disfruta de
              nuestros deliciosos productos!
            </p>
          </div>
        </div>
        {/*Segundo card*/}
        <div className="card-section">
          <div className="information-bakery">
            <h1>¡Pedidos adomicilio!</h1>
            <p>
              En La Fuente también contamos con servicio a domicilio. Realiza tu pedido
              y recíbelo en la comodidad de tu hogar. Contamos con una amplia cobertura
              en la ciudad de  El salvador. ¡Haz tu pedido y disfruta de nuestros productos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;