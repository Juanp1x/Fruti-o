// =============================================
//  Starbucks Colombia — Carta completa
//  Incluye: SeccionCarta + SeccionBebidas
//  Uso: <CartaStarbucks />
// =============================================

import { useState } from "react";

export default function CartaStarbucks() {
  const [pagina, setPagina] = useState("carta");

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", margin: 0, padding: 0 }}>
      {pagina === "carta"   && <SeccionCarta   setPagina={setPagina} />}
      {pagina === "bebidas" && <SeccionBebidas setPagina={setPagina} />}
      {pagina === "alimentos" && <SeccionAlimentos setPagina={setPagina} />}
    </div>
  );
}

// ── SECCION CARTA ──────────────────────────────────────────
function SeccionCarta({ setPagina }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "30% 70%",
      minHeight: "calc(100vh - 77px)",
    }}>
      {/* Columna izquierda */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80"
          alt="Carta Starbucks"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <span style={{
          position: "absolute",
          bottom: 32,
          left: 20,
          color: "#fff",
          fontSize: 28,
          fontWeight: 900,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          textShadow: "0 2px 12px rgba(0,0,0,0.4)",
        }}>
          CARTA
        </span>
      </div>

      {/* Columna derecha */}
      <ContenidoDerecho setPagina={setPagina} />
    </div>
  );
}

// ── CONTENIDO DERECHO ──────────────────────────────────────
function ContenidoDerecho({ setPagina }) {
  return (
    <div style={{
      backgroundColor: "#f2f0eb",
      padding: "56px 64px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>
      <p style={{
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 1.55,
        color: "#1a1a1a",
        maxWidth: 520,
        margin: "0 0 16px 0",
      }}>
        Bebidas deliciosas y artesanales. Alimentos de gran sabor, elaborados
        con ingredientes sencillos pero de gran calidad. El café está en nuestro
        corazón, y también lo están todas las formas en las que te llevamos la
        experiencia Starbucks©, estés donde estés.
      </p>
      <p style={{
        fontSize: 14,
        color: "#444",
        lineHeight: 1.7,
        maxWidth: 480,
        margin: "0 0 40px 0",
      }}>
        Tanto si se trata de tu taza de café favorita para empezar el día como
        de un bocado rápido para animarte, tenemos algo preparado para ti.
        ¡Descúbrelo!
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 560 }}>
        <Card
          img="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80"
          titulo="Bebidas"
          descripcion="Podrás disfrutar de tu bebida favorita cómo y dónde quieras, con un sinfín de combinaciones donde elegir; frías, calientes, con leches o bebidas vegetales, con diferentes sabores."
          onDescubre={() => setPagina("bebidas")}
        />
        <Card
          img="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80"
          titulo="Alimentos"
          descripcion='Descubre cual es el "perfect pairing" de tu bebida favorita. No te pierdas la variedad de productos que siempre preparamos para ti, con la mejor gama de sabores y de la mejor calidad.'
          onDescubre={() => setPagina("alimentos")}
        />
      </div>
    </div>
  );
}

// ── CARD (carta principal) ─────────────────────────────────
function Card({ img, titulo, descripcion, onDescubre }) {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: 8,
      overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
    }}>
      <img src={img} alt={titulo} style={{ width: "100%", height: 150, objectFit: "cover", display: "block" }} />
      <div style={{ padding: "20px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a", margin: "0 0 10px 0", fontFamily: "'Georgia', serif" }}>
          {titulo}
        </h2>
        <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, margin: 0, flex: 1 }}>
          {descripcion}
        </p>
        <button
          onClick={onDescubre}
          style={{
            marginTop: 20,
            padding: "10px 24px",
            borderRadius: 50,
            border: "2px solid #00704A",
            backgroundColor: "transparent",
            color: "#00704A",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
            alignSelf: "flex-start",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => { e.target.style.backgroundColor = "#00704A"; e.target.style.color = "#fff"; }}
          onMouseLeave={e => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#00704A"; }}
        >
          Descubre más
        </button>
      </div>
    </div>
  );
}

// ── SECCION BEBIDAS ────────────────────────────────────────
function SeccionBebidas({ setPagina }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "40% 60%",
      minHeight: "calc(100vh - 77px)",
    }}>
      <ColumnaIzquierdaBebidas />
      <ColumnaDerechaBebidas />
    </div>
  );
}

// ── COLUMNA IZQUIERDA BEBIDAS ──────────────────────────────
function ColumnaIzquierdaBebidas() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <img
        src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80"
        alt="Bebidas"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div style={{ position: "absolute", bottom: 32, left: 20 }}>
        <p style={{ color: "#fff", fontSize: 11, margin: "0 0 4px 0", opacity: 0.8 }}>Starbucks©</p>
        <p style={{ color: "#fff", fontSize: 14, fontWeight: 700, margin: 0 }}>
          Conoce nuestras bebidas y alimentos de temporada
        </p>
      </div>
    </div>
  );
}

// ── COLUMNA DERECHA BEBIDAS ────────────────────────────────
function ColumnaDerechaBebidas() {
  return (
    <div style={{ backgroundColor: "#f2f0eb", padding: "40px 48px", overflowY: "auto" }}>

      <Seccion titulo="TEMPORADA" tituloBold={true}>
        <CardProducto titulo="Temporada"      img="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&q=80" />
      </Seccion>

      <Seccion titulo="Bebidas">
        <CardProducto titulo="Café Caliente"   img="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&q=80" />
        <CardProducto titulo="Bebidas Heladas" img="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&q=80" />
        <CardProducto titulo="Frappuccinos"    img="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&q=80" />
        <CardProducto titulo="Refreshers"      img="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&q=80" />
        <CardProducto titulo="Té"              img="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&q=80" />
        <CardProducto titulo="Chocolate"       img="https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=300&q=80" />
      </Seccion>

      <Seccion titulo="Bebidas listas para llevar">
        <CardProducto titulo="Para llevar"    img="https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?w=300&q=80" />
      </Seccion>

      <Seccion titulo="Café en grano">
        <CardProducto titulo="Nuestro Café"   img="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&q=80" />
      </Seccion>

    </div>
  );
}

// ── SECCION (título + grid) ────────────────────────────────
function Seccion({ titulo, tituloBold, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h3 style={{
        fontSize: tituloBold ? 13 : 16,
        fontWeight: tituloBold ? 700 : 600,
        letterSpacing: tituloBold ? "0.08em" : 0,
        textTransform: tituloBold ? "uppercase" : "none",
        color: "#1a1a1a",
        margin: "0 0 12px 0",
      }}>
        {titulo}
      </h3>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 150px)",
        gap: "16px 16px",
      }}>
        {children}
      </div>
    </div>
  );
}
// ── CARD PRODUCTO (fondo verde) ────────────────────────────
function CardProducto({ titulo, img }) {
  return (
    <div style={{
      backgroundColor: "#1E3932",
      borderRadius: 6,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      width: 120,
    }}>
      <img src={img} alt={titulo} style={{ width: "100%", height: 90, objectFit: "cover", display: "block" }} />
      <div style={{ padding: "8px 8px 10px" }}>
        <p style={{ color: "#fff", fontSize: 12, margin: "0 0 6px 0", fontWeight: 500 }}>
          {titulo}
        </p>
        <button
          style={{
            padding: "4px 10px",
            borderRadius: 50,
            border: "1px solid #fff",
            backgroundColor: "transparent",
            color: "#fff",
            fontSize: 10,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => { e.target.style.backgroundColor = "#fff"; e.target.style.color = "#1E3932"; }}
          onMouseLeave={e => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#fff"; }}
        >
          Descubre más
        </button>
      </div>
    </div>
  );
}
// ── SECCION ALIMENTOS ──────────────────────────────────────
function SeccionAlimentos({ setPagina }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "40% 60%",
      minHeight: "calc(100vh - 77px)",
    }}>
      <ColumnaIzquierdaAlimentos />
      <ColumnaDerechaAlimentos />
    </div>
  );
}

function ColumnaIzquierdaAlimentos() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <img
        src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80"
        alt="Alimentos"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div style={{ position: "absolute", bottom: 32, left: 20 }}>
        <p style={{ color: "#fff", fontSize: 11, margin: "0 0 4px 0", opacity: 0.8 }}>
          ¡Disfrútalos!
        </p>
        <p style={{ color: "#fff", fontSize: 14, fontWeight: 700, margin: 0 }}>
          Conoce nuestras bebidas y alimentos de temporada
        </p>
      </div>
    </div>
  );
}

function ColumnaDerechaAlimentos() {
  return (
    <div style={{ backgroundColor: "#f2f0eb", padding: "40px 48px", overflowY: "auto" }}>

      <Seccion titulo="Temporada">
        <CardAlimento titulo="Nuevos sabores" img="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&q=80" />
      </Seccion>

      <Seccion titulo="Alimentos">
        <CardAlimento titulo="Pastelería"       img="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=300&q=80" />
        <CardAlimento titulo="Panadería"        img="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&q=80" />
        <CardAlimento titulo="Paninis"          img="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&q=80" />
        <CardAlimento titulo="Tortas"           img="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&q=80" />
        <CardAlimento titulo="Comida Empacada"  img="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80" />
      </Seccion>

    </div>
  );
}

// Card con imagen verde arriba y título/botón abajo en blanco
function CardAlimento({ titulo, img }) {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: 6,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      width: 150,
    }}>
      {/* Imagen con fondo verde */}
      <div style={{ backgroundColor: "#1E3932", padding: 8 }}>
        <img
          src={img}
          alt={titulo}
          style={{ width: "100%", height: 100, objectFit: "cover", borderRadius: 4, display: "block" }}
        />
      </div>

      {/* Título y botón sobre fondo blanco */}
      <div style={{ padding: "8px 10px 12px" }}>
        <p style={{ color: "#1a1a1a", fontSize: 13, margin: "0 0 8px 0", fontWeight: 600 }}>
          {titulo}
        </p>
        <button
          style={{
            padding: "4px 12px",
            borderRadius: 50,
            border: "1px solid #00704A",
            backgroundColor: "transparent",
            color: "#00704A",
            fontSize: 11,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => { e.target.style.backgroundColor = "#00704A"; e.target.style.color = "#fff"; }}
          onMouseLeave={e => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#00704A"; }}
        >
          Descubre más
        </button>
      </div>
    </div>
  );
}