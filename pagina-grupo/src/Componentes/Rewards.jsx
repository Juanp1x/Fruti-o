import "./Rewards.css";

const StarIcon = ({ size = 24, color = "#CBA135", filled = true }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? color : "none"}
    stroke={color}
    strokeWidth="1.5"
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const rewards = [
  {
    id: 1,
    icon: <div className="icon-circle icon-circle--green-light">⭐</div>,
    title: "Acumula Estrellas",
    desc: "Por cada $2.000, ganas 1 Estrella. ¡Suma Stars sin importar cómo pagues! Tantas ⭐ que necesitarás tus 🕶️.",
  },
  {
    id: 2,
    icon: <div className="icon-circle icon-circle--dark-green">☕</div>,
    title: "50 Estrellas – Nivel Green",
    desc: "Cada 50 Estrellas acumuladas te regalaremos tu bebida Alta favorita en nivel Green y de cualquier tamaño en el nivel Gold. ¡Tus días brillaran más!",
  },
  {
    id: 3,
    icon: <div className="icon-circle icon-circle--gold"><span>GOLD</span></div>,
    title: "Nivel Gold",
    desc: "Al alcanzar 100 Estrellas en 12 meses… ¡Pasarás a ser miembro Gold! Al ser Gold, obtendrás una bebida de regalo cada 50 Estrellas y la podrás personalizar gratis.",
  },
  {
    id: 4,
    icon: <div className="icon-circle icon-circle--purple">🎁</div>,
    title: "¡Una bebida gratis por tu cumpleaños!",
    desc: "Queremos celebrar contigo un día tan importante por ello, si eres miembro Starbucks Rewards, tendrás tu bebida Alta favorita de regalo para disfrutar por 30 días desde tu día de cumpleaños. ¡Te lo mereces!.",
  },
];

export default function Rewards() {
  return (
    <div className="page">
      <div className="layout">

        {/* COLUMNA IZQUIERDA */}
        <div className="layout__left">

          {/* Hero texto */}
          <div className="hero__left">
            <h1 className="hero__title">
              Saborea tu camino hacia más recompensas con{" "}
              <span className="hero__title--accent">Starbucks® Rewards.</span>
            </h1>
            <p className="hero__subtitle">
              Dile hola a un universo de beneficios ¡Te mereces las Estrellas!
            </p>
            <div className="hero__cta-group">
              <button className="btn btn--white">Regístrate ahora</button>
              <button className="btn btn--outline-white">Iniciar sesión</button>
            </div>
          </div>

          {/* Beneficios */}
          <div className="benefits">
            <p className="benefits__intro">
              Acumula Estrellas y haz que tus días brillen más.
            </p>
            <div className="benefits__list">
              {rewards.map((item) => (
                <div key={item.id} className="benefit-item">
                  <div className="benefit-item__icon">{item.icon}</div>
                  <div className="benefit-item__content">
                    <h3 className="benefit-item__title">{item.title}</h3>
                    <p className="benefit-item__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="faq">
            <h2 className="faq__title">¿Tienes alguna pregunta?</h2>
            <p className="faq__desc">
              Podrás preguntarle todas tus dudas a tu barista o realizar tu consulta
              a través de Atención al Cliente.
            </p>
            <button className="btn btn--outline-dark">Atención al Cliente</button>
          </div>

          {/* Términos */}
          <div className="terms">
            <h2 className="terms__title">Términos y Condiciones</h2>
            <p className="terms__desc">
              Conoce más sobre el programa Starbucks® Rewards en nuestros términos y condiciones.
            </p>
            <button className="btn btn--outline-dark">Términos y Condiciones</button>
          </div>

        </div>

        {/* COLUMNA DERECHA */}
        <div className="layout__right">
          <div className="hero__star hero__star--top-left">
            <StarIcon size={40} color="#CBA135" />
          </div>
          <div className="hero__star hero__star--bottom-right">
            <StarIcon size={28} color="#4CAF50" />
          </div>
          <div className="hero__star hero__star--mid-right">
            <StarIcon size={22} color="#4CAF50" />
          </div>

          <div className="hero__brand">
            <div className="hero__brand-name">STARBUCKS®</div>
            <div className="hero__brand-sub">REWARDS</div>
          </div>

          <div className="hero__headline">
            <div className="hero__headline-banner">
              <span>TE MERECES LAS</span>
            </div>
            <span className="hero__headline-main">Estrellas</span>
            <div className="hero__headline-tagline">
              <span>CADA ESTRELLA TE ACERCA</span>
              <span>A TU BEBIDA FAVORITA.</span>
            </div>
          </div>

          <div className="hero__cup">
            <svg width="140" height="160" viewBox="0 0 120 140" fill="none">
              <path d="M25 40 L18 130 Q18 136 25 136 L95 136 Q102 136 102 130 L95 40 Z" fill="white" opacity="0.95" />
              <ellipse cx="60" cy="40" rx="35" ry="8" fill="#e8e8e8" />
              <path d="M28 38 Q60 30 92 38" stroke="#ccc" strokeWidth="3" fill="none" />
              <path d="M30 80 L25 116 L95 116 L90 80 Z" fill="#1E3932" opacity="0.8" />
              <circle cx="60" cy="98" r="12" fill="#CBA135" opacity="0.7" />
              <text x="60" y="102" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">★</text>
              <rect x="68" y="8" width="5" height="38" rx="2" fill="#aaa" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
