// Historias.jsx — réplica fiel de historias.starbucks.com
// Creado por: Yesica
import { useState } from 'react';
import { FaSearch, FaGlobeAmericas, FaBars, FaTimes, FaChevronDown, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import './Historias.css';

const LOGO = '/images/logo1-removebg-preview.png';

/* ═══════ DATOS ═══════ */
const hero = {
  titulo: 'Descubre la magia del invierno con las nuevas bebidas de Starbucks® que inspiran calidez a los clientes',
  descripcion: 'La colección Pistachio regresa, junto con las bebidas Strato Frappuccino® y el nuevo Pistachio Cold Foam Cold Brew para llenar la temporada de momentos reconfortantes.',
  imagen: 'https://about.starbucks.com/uploads/sites/21/2026/01/PUBLIC-AFFAIRS_STORIES-HEADER-IMAGE_NH_WINTER-01SPA.jpg',
  imagenProducto: 'https://about.starbucks.com/uploads/sites/21/2025/12/PUBLIC-AFFAIRS-NH-WINTER-PISTACHIO-FAMILIY-FY26-06-819x1024.jpg',
  enlace: '#',
};

const destacados = [
  { id: 1, cat: 'News', titulo: 'Starbucks inaugura su primera tienda en Santiago en celebración del 5to aniversario de la marca en República Dominicana', tiempo: '5 MIN READ', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop', enlace: '#' },
  { id: 2, cat: 'Café', titulo: 'Nueve terrazas hermosas de Starbucks alrededor del mundo', tiempo: '4 MIN READ', img: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&h=400&fit=crop', enlace: '#' },
];

const novedades = [
  { id: 1, cat: 'CAFÉ', titulo: 'Nueve terrazas hermosas de Starbucks alrededor del mundo', tiempo: '4 MIN READ', enlace: '#' },
  { id: 2, cat: 'BEVERAGES & FOOD', titulo: '¡El Frappuccino® cumple 30 años!', tiempo: '4 MIN READ', enlace: '#' },
  { id: 3, cat: 'NEWS', titulo: 'Experiencia de Liderazgo Starbucks 2025: Starbucks organiza el primer Global Barista Championship y reúne a 14,000 líderes de cafeterías de Norteamérica para acelerar su estrategia "Back to Starbucks"', tiempo: '6 MIN READ', enlace: '#' },
  { id: 4, cat: 'COFFEE & CRAFT', titulo: 'Conoce a Sebastian, el LAC Barista Champion que representará a Latinoamérica en Las Vegas', tiempo: '4 MIN READ', enlace: '#' },
];

const comunidad = [
  { id: 1, cat: 'Community', titulo: 'Este es un tributo a las mujeres', tiempo: '9 MIN READ', img: 'https://images.unsplash.com/photo-1524350876685-274059332603?w=600&h=500&fit=crop', enlace: '#' },
];

const planeta = [
  { id: 1, cat: 'Planeta', titulo: 'Así contribuye Starbucks México con la comunidad cafetalera de Zongozotla, Puebla', tiempo: '6 MIN READ', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=500&fit=crop', enlace: '#' },
  { id: 2, cat: 'Planeta', titulo: 'Así es como Starbucks celebra el Día de la Tierra en Latinoamérica', tiempo: '5 MIN READ', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop', enlace: '#' },
];

const cafeData = [
  { id: 1, cat: 'Café', titulo: 'Las 5 cosas que tienes que saber sobre la primera tienda de Starbucks en Guyana', tiempo: '4 MIN READ', img: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&h=500&fit=crop', enlace: '#' },
  { id: 2, cat: 'Café', titulo: 'Prepara la mejor taza de café en casa con los consejos de los participantes del Starbucks LAC Barista Championship de este año', tiempo: '5 MIN READ', img: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&h=400&fit=crop', enlace: '#' },
];

/* ═══════ CARD CON IMAGEN ═══════ */
const Card = ({ art, dark }) => (
  <article className={`h-card ${dark ? 'h-card--dark' : ''}`}>
    <a href={art.enlace} className="h-card__link">
      <div className="h-card__img-wrap">
        <img src={art.img} alt={art.titulo} className="h-card__img" loading="lazy" />
      </div>
      <div className="h-card__body">
        <span className="h-card__cat">{art.cat}</span>
        <h3 className="h-card__title">{art.titulo} <FaChevronRight className="h-card__arrow" /></h3>
        <span className="h-card__time">{art.tiempo}</span>
      </div>
    </a>
  </article>
);

/* ═══════ NOVEDADES TEXT ITEM ═══════ */
const NovedadItem = ({ art }) => (
  <div className="h-novedad">
    <a href={art.enlace} className="h-novedad__link">
      <h4 className="h-novedad__title">{art.titulo} <FaChevronRight className="h-novedad__arrow" /></h4>
      <div className="h-novedad__meta">
        <span className="h-novedad__cat">{art.cat}</span>
        <span className="h-novedad__sep">——</span>
        <span className="h-novedad__time">{art.tiempo}</span>
      </div>
    </a>
  </div>
);

/* ═══════ HISTORIAS NAVBAR ═══════ */
const HistoriasNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="hn">
      <div className="hn__inner">
        <a href="https://historias.starbucks.com" className="hn__logo">
          <img src={LOGO} alt="Starbucks" className="hn__logo-img" />
        </a>
        <ul className={`hn__links ${mobileOpen ? 'hn__links--open' : ''}`}>
          <li><a href="#cafe">Café</a></li>
          <li><a href="#comunidad">Comunidad</a></li>
          <li className="hn__dropdown">
            <a href="#prensa">Sala de prensa <FaChevronDown className="hn__chevron" /></a>
          </li>
        </ul>
        <div className="hn__actions">
          <button className="hn__icon-btn" aria-label="Buscar"><FaSearch /></button>
          <button className="hn__icon-btn" aria-label="Región"><FaGlobeAmericas /></button>
        </div>
        <button className="hn__hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

/* ═══════ HISTORIAS (MAIN) ═══════ */
const Historias = () => (
  <div className="historias">
    <HistoriasNavbar />

    {/* ── HERO ── */}
    <section className="h-hero">
      <a href={hero.enlace} className="h-hero__link">
        <img src={hero.imagen} alt={hero.titulo} className="h-hero__img" />
        <div className="h-hero__overlay" />
        <div className="h-hero__content">
          <h1 className="h-hero__title">{hero.titulo}</h1>
          <p className="h-hero__desc">{hero.descripcion}</p>
          <span className="h-hero__cta">→ Aprender más</span>
        </div>
        <img src={hero.imagenProducto} alt="Pistachio Collection" className="h-hero__product" />
      </a>
    </section>

    {/* ── ASPECTOS DESTACADOS + NOVEDADES (lado a lado) ── */}
    <section className="h-section h-section--white">
      <div className="h-wrap">
        <div className="h-featured-row">
          {/* Columna izquierda: ASPECTOS DESTACADOS */}
          <div className="h-featured-left">
            <h2 className="h-section__label">ASPECTOS DESTACADOS</h2>
            <div className="h-featured-cards">
              {destacados.map(a => <Card key={a.id} art={a} />)}
            </div>
          </div>
          {/* Columna derecha: NOVEDADES (solo texto) */}
          <div className="h-featured-right">
            <h3 className="h-section__label">NOVEDADES</h3>
            <div className="h-novedades-list">
              {novedades.map(a => <NovedadItem key={a.id} art={a} />)}
            </div>
            <a href="#" className="h-more__btn">→ More News</a>
          </div>
        </div>
      </div>
    </section>

    {/* ── COMUNIDAD ── */}
    <section id="comunidad" className="h-section h-section--beige">
      <div className="h-wrap">
        <h2 className="h-section__label">COMUNIDAD</h2>
        <div className="h-grid h-grid--1">
          {comunidad.map(a => <Card key={a.id} art={a} />)}
        </div>
      </div>
    </section>

    {/* ── PLANETA ── */}
    <section className="h-section h-section--white">
      <div className="h-wrap">
        <h2 className="h-section__label">PLANETA</h2>
        <div className="h-grid h-grid--2">
          {planeta.map(a => <Card key={a.id} art={a} />)}
        </div>
      </div>
    </section>

    {/* ── CAFÉ (fondo oscuro) ── */}
    <section id="cafe" className="h-section h-section--dark">
      <div className="h-wrap">
        <h2 className="h-section__label h-section__label--light">CAFÉ</h2>
        <div className="h-grid h-grid--2">
          {cafeData.map(a => <Card key={a.id} art={a} dark />)}
        </div>
      </div>
    </section>

    {/* ── FOOTER PROPIO DE HISTORIAS ── */}
    <footer className="h-footer">
      {/* Parte superior: imagen de fondo con texto */}
      <div className="h-footer__hero">
        <div className="h-footer__hero-overlay" />
        <div className="h-footer__hero-content">
          <h2 className="h-footer__hero-title">THE<br/>STARBUCKS<br/>COFFEE<br/>COMPANY</h2>
          <a href="https://about.starbucks.com/mission/" className="h-footer__hero-btn">Nuestros valores y compromisos</a>
        </div>
      </div>
      {/* Parte inferior: logo, links, regiones */}
      <div className="h-footer__bottom">
        <hr className="h-footer__divider" />
        <img src={LOGO} alt="Starbucks" className="h-footer__logo" />
        <div className="h-footer__nav">
          <a href="https://www.starbucks.com/" target="_blank" rel="noreferrer">Starbucks.com <FaExternalLinkAlt className="h-footer__ext" /></a>
          <a href="https://careers.starbucks.com/" target="_blank" rel="noreferrer">Centro de Carreras <FaExternalLinkAlt className="h-footer__ext" /></a>
          <a href="https://www.starbucksreserve.com/" target="_blank" rel="noreferrer">Reserve <FaExternalLinkAlt className="h-footer__ext" /></a>
          <a href="https://athome.starbucks.com/" target="_blank" rel="noreferrer">En casa <FaExternalLinkAlt className="h-footer__ext" /></a>
        </div>
        <div className="h-footer__regions">
          <div className="h-footer__region">
            <h4>Canada</h4>
            <a href="#">English <FaExternalLinkAlt className="h-footer__ext" /></a>
            <a href="#">Français <FaExternalLinkAlt className="h-footer__ext" /></a>
          </div>
          <div className="h-footer__region">
            <h4>USA</h4>
            <a href="#">English <FaExternalLinkAlt className="h-footer__ext" /></a>
          </div>
          <div className="h-footer__region">
            <h4>EMEA</h4>
            <a href="#">English <FaExternalLinkAlt className="h-footer__ext" /></a>
          </div>
          <div className="h-footer__region">
            <h4>Latin America</h4>
            <a href="#">English</a>
            <a href="#" className="h-footer__region-active">Español</a>
            <a href="#">Português</a>
          </div>
          <div className="h-footer__region">
            <h4>Asia</h4>
            <a href="#">English <FaExternalLinkAlt className="h-footer__ext" /></a>
          </div>
          <div className="h-footer__region">
            <h4>Japan</h4>
            <a href="#">日本語 <FaExternalLinkAlt className="h-footer__ext" /></a>
          </div>
        </div>
        <div className="h-footer__legal">
          <a href="#">Aviso de privacidad de Starbucks</a>
          <a href="#">Condiciones de Uso</a>
          <a href="#">Cookie Preferences</a>
        </div>
        <p className="h-footer__copy">© 2026 Starbucks Coffee Company</p>
      </div>
    </footer>

  </div>
);

export default Historias;
