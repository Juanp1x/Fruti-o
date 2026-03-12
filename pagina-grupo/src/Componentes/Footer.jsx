// Footer.jsx - Footer reutilizable réplica de starbucks.com.co
// Creado por: Yesica
// USO: import Footer from './Componentes/Footer';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  const [open, setOpen] = useState(null);
  const toggle = (s) => setOpen(open === s ? null : s);

  return (
    <footer className="footer">

      {/* ── PARTE SUPERIOR: Logo + Columnas ── */}
      <div className="footer__top">
        <div className="footer__container">

          {/* LOGO */}
          <div className="footer__logo-wrap">
            <img
              src="/images/logo1-removebg-preview.png"
              alt="Starbucks"
              className="footer__logo"
            />
          </div>

          {/* COLUMNAS */}
          <div className="footer__cols">

            {/* Col 1 - Sobre nosotros */}
            <div className="footer__col">
              <h3 className="footer__col-title" onClick={() => toggle('sobre')}>
                Sobre nosotros
                <span className={`footer__arrow ${open === 'sobre' ? 'footer__arrow--open' : ''}`}>+</span>
              </h3>
              <ul className={`footer__links ${open === 'sobre' ? 'footer__links--show' : ''}`}>
                <li><a href="https://www.starbucks.com.co/seccion/nosotros">Acerca de Starbucks</a></li>
                <li><a href="https://www.starbucks.com.co/seccion/trabaja-con-nosotros">Trabaja con nosotros</a></li>
                <li><a href="https://www.starbucks.com.co/seccion/novedades">Historias y noticias Starbucks</a></li>
                <li><a href="/notmilk" className="footer__link--underline">Sobre NotMilk</a></li>
                <li><a href="https://www.starbucks.com.co/seccion/guia-de-preparacion">Guía de preparación de un buen café en casa</a></li>
              </ul>
            </div>

            {/* Col 2 - Atención al Cliente */}
            <div className="footer__col">
              <h3 className="footer__col-title" onClick={() => toggle('atencion')}>
                Atencion al Cliente
                <span className={`footer__arrow ${open === 'atencion' ? 'footer__arrow--open' : ''}`}>+</span>
              </h3>
              <ul className={`footer__links ${open === 'atencion' ? 'footer__links--show' : ''}`}>
                <li><a href="https://www.starbucks.com.co/seccion/sugerencias-y-reclamos">Sugerencias y reclamos</a></li>
                <li><a href="https://www.starbucks.com.co/seccion/factura-electronica">Factura Electrónica</a></li>
              </ul>
            </div>

            {/* Col 3 - Comunicados Oficiales */}
            <div className="footer__col">
              <h3 className="footer__col-title" onClick={() => toggle('comunicados')}>
                Comunicados Oficiales
                <span className={`footer__arrow ${open === 'comunicados' ? 'footer__arrow--open' : ''}`}>+</span>
              </h3>
              <ul className={`footer__links ${open === 'comunicados' ? 'footer__links--show' : ''}`}>
                {/* Sin sub-links visibles en el sitio real */}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── LINKS LEGALES ── */}
      <div className="footer__legal">
        <div className="footer__container">
          <ul className="footer__legal-list">
            <li><a href="https://www.starbucks.com.co/articulo/terminos-de-uso-web">Términos de uso web</a></li>
            <li><a href="https://www.starbucks.com.co/articulo/aviso-de-privacidad">Aviso de Privacidad</a></li>
            <li><a href="https://starbucks.com.co/sites/starbucks-co-pwa/files/2025-01/STARBUCKS%20PoliticadeTratamientodeDatos_.pdf">Política de tratamiento de datos</a></li>
            <li><a href="https://www.starbucks.com.co/articulo/reversion-de-pago">Reversión de pago</a></li>
            <li><a href="https://www.starbucks.com.co/articulo/politica-de-garantia">Política de garantía</a></li>
            <li><a href="https://www.starbucks.com.co/terminos-y-condiciones-starbucks-rewards">Términos y Condiciones Starbucks Rewards</a></li>
          </ul>
        </div>
      </div>

      {/* ── REDES SOCIALES ── */}
      <div className="footer__social">
        <div className="footer__container">
          <div className="footer__social-icons">
            <a href="https://www.facebook.com/StarbucksColombia" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/starbuckscol/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.youtube.com/@StarbucksColombiaOfficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://x.com/StarbucksCOL" target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter /></a>
          </div>
        </div>
      </div>

      {/* ── APP SECTION ── */}
      <div className="footer__app">
        <div className="footer__container">
          <div className="footer__app-box">
            <div className="footer__app-text">
              <h3>Únete a Starbucks Rewards<br/>y disfruta más beneficios</h3>
              <p>Con la app de Starbucks Colombia, acumular Estrellas es más fácil que nunca. Compra tus favoritos y disfruta de beneficios exclusivos. ¡Descárgala y comienza a sumar Estrellas hoy!</p>
            </div>
            <div className="footer__app-badges">
              <a href="https://apps.apple.com/co/app/starbucks-colombia/id6621681136" target="_blank" rel="noopener noreferrer">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="footer__badge" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.starbucks.col" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="footer__badge" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── COPYRIGHT ── */}
      <div className="footer__bottom">
        <div className="footer__container">
          <p className="footer__copy">© 2026. Starbucks Coffee Company. Reservados todos los derechos</p>
        </div>
      </div>

      {/* ── SIC ── */}
      <div className="footer__sic-section">
        <div className="footer__container">
          <a href="https://sedeelectronica.sic.gov.co/" target="_blank" rel="noopener noreferrer" className="footer__sic">
            <img src="https://www.sic.gov.co/sites/default/files/images/logo_sic.png" alt="Superintendencia de Industria y Comercio" onError={(e) => { e.target.onerror = null; e.target.src = 'https://sedeelectronica.sic.gov.co/recursos/img/logo.png'; }} />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
