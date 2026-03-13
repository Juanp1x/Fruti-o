import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuActivo, setMenuActivo] = useState(null);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const navInfo = {
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg",
    marca: "Starbucks"
  };

  const links = [
    { id: 1, nombre: "CARTA", href: "/carta" },
    { id: 2, nombre: "CAFE", href: "/cafe" },
    { id: 3, nombre: "NOVEDADES", href: "/novedades" },
    { id: 4, nombre: "REWARDS", href: "/rewards" },
  ];

  function handleNavClick(e, link) {
    e.preventDefault();
    setMenuActivo(link.id);
    setMenuAbierto(false);
    window.location.href = link.href;
  }

  function handleBuscarTienda(e) {
    e.preventDefault();
    window.location.href = "/";
  }

  function toggleMenu() {
    setMenuAbierto(!menuAbierto);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div 
          className="navbar-logo" 
          style={{ cursor: "pointer" }} 
          onClick={() => window.location.href = "/"}
        >
          <img src={navInfo.logo} alt={navInfo.marca} />
        </div>

        <button
          className="navbar-hamburguesa"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={"navbar-links " + (menuAbierto ? "abierto" : "")}>
          {links.map(function(link) {
            return (
              <li key={link.id}>
                {/* ✅ CORRECCIÓN 1: Agregada etiqueta <a> */}
                <a
                  href={link.href}
                  className={menuActivo === link.id ? "activo" : ""}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.nombre}
                </a>
              </li>
            );
          })}
        </ul>

        <div className={"navbar-acciones " + (menuAbierto ? "abierto" : "")}>
          {/* ✅ CORRECCIÓN 2: Agregada etiqueta <a> */}
          <a
            href="/"
            className="navbar-tienda"
            onClick={handleBuscarTienda}
          >
            <span className="icono-ubicacion">📍</span>
            Buscar una tienda
          </a>
          <button className="btn-registro">Regístrese ahora</button>
          <button className="btn-login">Iniciar sesión</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;