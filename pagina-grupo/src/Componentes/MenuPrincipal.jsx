import { useState } from "react";
import "./MenuPrincipal.css";

import bannerLavanda from "../assets/Vainilla.png";
import historias from "../assets/Historia.png";
import terminos from "../assets/Terminos.png";
import planeta from "../assets/Nuestro.png";
import colombia from "../assets/Viaja.png";
import duoPerfecto from "../assets/Duo_perfecto.png";
import rewardsImg1 from "../assets/Acumula.png";
import rewardsImg2 from "../assets/50_Estrellas.png";
import rewardsImg3 from "../assets/100_estrellas.png";

function MenuPrincipal() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const bannerInfo = {
    titulo: "LAVANDA Está de Vuelta 💜",
    boton: "Buscar una tienda",
  };

  const bebidas = [
    { id: 1, nombre: "Vainilla Lavanda Latte", top: "20%", left: "35%" },
    { id: 2, nombre: "Vainilla Lavanda Latte Helado", top: "15%", left: "70%" },
    { id: 3, nombre: "Lavanda Mocha Blanco Frappuccino", top: "60%", left: "28%" },
    { id: 4, nombre: "Matcha Helado con Lavanda Cold Foam", top: "70%", left: "62%" },
  ];

  const rewards = [
    {
      id: 1,
      titulo: "Acumula Estrellas con cada compra",
      descripcion: "$2000 = 1 Estrella ⭐",
      icono: rewardsImg1,
    },
    {
      id: 2,
      titulo: "¡50 Estrellas es una bebida de regalo!",
      descripcion: "¿La única forma en que Starbucks sabe mejor? Cuando es gratis",
      icono: rewardsImg2,
    },
    {
      id: 3,
      titulo: "100 Estrellas en el año = Nivel Gold",
      descripcion: "El nivel Gold desbloquea emocionantes regalos durante todo el año",
      icono: rewardsImg3,
    },
  ];

  const cards = [
    {
      id: 1,
      titulo: "¡EL DÚO PERFECTO!",
      descripcion: "Arma tu combinación favorita, ideal para tu día.",
      boton: "Descubre más",
      imagen: duoPerfecto,
    },
    {
      id: 2,
      titulo: "Viaja por Colombia",
      descripcion: "Viaja por Colombia desde tu taza de café.",
      boton: "Conoce más",
      imagen: colombia,
    },
    {
      id: 3,
      titulo: "Trae tu reutilizable",
      descripcion: "¡Obtén un 15% de descuento en tu bebida favorita!",
      boton: "Más información",
      imagen: planeta,
    },
    {
      id: 4,
      titulo: "Nuestras actividades",
      descripcion: "Términos y Condiciones Starbucks.",
      boton: "Más información",
      imagen: terminos,
    },
  ];

  function handleBuscarTienda() {
    window.location.href = "/buscar-tienda";
  }

  return (
    <section className="menu-principal" id="inicio">

      <div className="banner">
        <div className="banner-left">
          <h2>{bannerInfo.titulo}</h2>
          <button className="banner-btn" onClick={handleBuscarTienda}>
            {bannerInfo.boton}
          </button>
        </div>
        <div className="banner-right">
          <img src={bannerLavanda} alt="Lavanda" className="banner-img" />
          <div className="banner-imagen-container">
            {bebidas.map(function(bebida) {
              return (
                <div
                  key={bebida.id}
                  className={"etiqueta " + (hoveredCard === bebida.id ? "activo" : "")}
                  style={{ top: bebida.top, left: bebida.left }}
                  onMouseEnter={function() { setHoveredCard(bebida.id); }}
                  onMouseLeave={function() { setHoveredCard(null); }}
                >
                  {bebida.nombre}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="rewards-section">
        <h2 className="rewards-titulo">Saluda a la infinidad de opciones y, sí, al café gratis.</h2>
        <div className="rewards-grid">
          {rewards.map(function(item) {
            return (
              <div key={item.id} className="reward-item">
                <img src={item.icono} alt={item.titulo} className="reward-icono" />
                <h3>{item.titulo}</h3>
                <p>{item.descripcion}</p>
              </div>
            );
          })}
        </div>
        <div className="rewards-botones">
          <button className="btn-verde">Regístrese ahora</button>
          <button className="btn-outline">Iniciar sesión</button>
        </div>
      </div>

      <div className="cards-grid">
        {cards.map(function(card) {
          return (
            <div key={card.id} className="card">
              <img src={card.imagen} alt={card.titulo} className="card-imagen" />
              <div className="card-contenido">
                <h3>{card.titulo}</h3>
                <p>{card.descripcion}</p>
                <button className="btn-card">{card.boton}</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="historias">
        <img src={historias} alt="Nuestras historias" className="historias-imagen" />
        <div className="historias-contenido">
          <h3>Nuestras historias</h3>
          <button className="btn-verde">Más información</button>
        </div>
      </div>

      <div className="buscar-tienda" id="buscar-tienda">
        <div className="tienda-left">
          <h3>Buscar una tienda</h3>
          <p>Comparte tu ubicación para que siempre puedas encontrar tu tienda más cercana.</p>
          <button className="btn-outline-dark">Compartir ubicación</button>
        </div>
        <div className="tienda-mapa">
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127337.78386530898!2d-74.14761!3d4.6482837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1!5e0!3m2!1ses!2sco!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </section>
  );
}

export default MenuPrincipal;