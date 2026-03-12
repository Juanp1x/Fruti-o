// NotMilk.jsx - Replica de starbucks.com.co/seccion/conoce-mas-sobre-notmilk
// Creado por: Yesica
import './NotMilk.css';

const LOGO = '/images/logo1-removebg-preview.png';

const NotMilk = () => (
  <div className="nm">

    {/* ── HEADER CON LOGO ── */}
    <header className="nm__header">
      <a href="/" className="nm__header-logo-link">
        <img src={LOGO} alt="Starbucks" className="nm__header-logo" />
      </a>
    </header>

    {/* ── SIDEBAR VERDE IZQUIERDA ── */}
    <aside className="nm__sidebar">
      <div className="nm__sidebar-inner">
        <img src={LOGO} alt="Starbucks" className="nm__sidebar-logo" />
        <h2 className="nm__sidebar-title">¡Conoce más sobre NotMilk!</h2>
      </div>
    </aside>

    {/* ── CONTENIDO DERECHA ── */}
    <main className="nm__content">

      {/* Título superior */}
      <h1 className="nm__page-title">¡Conoce más sobre NotMilk!</h1>

      {/* Banner principal - imagen de NotMilk vertiéndose */}
      <section className="nm__banner">
        <img 
          src="https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c15_card_with_app_promotion_610x313/public/2025-01/2022-05_BANNER%20NOTMILK-04.png.webp?h=3575e1f6&itok=KxKzQW9I"
          alt="NotMilk en Starbucks"
          className="nm__banner-img"
        />
      </section>

      {/* Texto intro */}
      <section className="nm__intro">
        <h2 className="nm__intro-title">LLEGÓ A STARBUCKS UNA NUEVA OPCIÓN DE LECHE VEGETAL</h2>
        <p className="nm__intro-sub">Sabe a leche, pero no es leche</p>
      </section>

      {/* Producto: imagen grande (ya tiene texto incluido) */}
      <section className="nm__product">
        <img 
          src="https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c15_card_with_app_promotion_610x313/public/2025-01/2022-05_EDIT-BANNERS-NOTMILK-SBX-24-04-22-02%20%281%29.png.webp?h=3575e1f6&itok=BgrLftyY"
          alt="NotMilk Low Fat 1L"
          className="nm__product-img"
        />
      </section>

      {/* CTA final */}
      <section className="nm__cta">
        <h2 className="nm__cta-title">Conoce más sobre NotMilk</h2>
        <a href="https://notco.com/cl/productos/notmilk" target="_blank" rel="noopener noreferrer" className="nm__cta-btn">
          Más información
        </a>
      </section>

    </main>
  </div>
);

export default NotMilk;
