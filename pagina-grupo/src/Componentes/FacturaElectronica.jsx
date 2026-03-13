import { useState } from "react";
import "./FacturaElectronica.css";

const LOGO_URL         = "https://contacto.miexperienciastarbucks.com.co/assets/images/Facturacion/Starbucks/LogoStarbucks.png";
const CONOCE_ICON_URL  = "https://tufacturastarbucks.com.co/assets/images/Facturacion/Starbucks/ConoceFactura.png";
const INFO_FACTURA_URL = "https://services.alsea.com.co/AlseaMedia/images/Facturacion/Starbucks/InfoFacturaStbx12.png";

// ══════════════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL — id="factura-electronica" para el footer
// ══════════════════════════════════════════════════════════════
export default function FacturaElectronica() {
  const [form, setForm] = useState({
    ciudad:      "",
    fecha:       new Date().toISOString().split("T")[0],
    identificador: "",
    puntoVenta:  "",
  });
  const [buscado, setBuscado] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleBuscar = () => {
    if (form.ciudad && form.identificador && form.puntoVenta) {
      setBuscado(true);
    }
  };

  return (
    <section id="factura-electronica">
      <div className="fe-layout">

        {/* ══ COLUMNA IZQUIERDA ══════════════════════════════ */}
        <div className="fe-left">

          {/* Ola orgánica verde */}
          <svg className="fe-wave-bg" viewBox="0 0 600 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,0 L460,0
                 C460,0 560,150 540,320
                 C520,490 450,540 470,680
                 C490,820 570,860 550,900
                 L0,900 Z"
              fill="#00704A"
            />
          </svg>

          {/* Logo */}
          <div className="fe-left-header">
            <img src={LOGO_URL} alt="Starbucks" className="fe-logo-img" />
          </div>

          {/* Tarjeta formulario */}
          <div className="fe-form-card">
            <div className="fe-form-heading">
              <p className="fe-form-title">Solicitud de Factura Electronica</p>
              <p className="fe-form-subtitle">Estrella Andina SAS, NIT. 900632938-1</p>
            </div>

            {buscado ? (
              <div className="fe-success-msg">
                <svg width="22" height="22" viewBox="0 0 24 24"
                  fill="none" stroke="#00704A" strokeWidth="2.2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Orden encontrada. Tu factura está siendo procesada.
              </div>
            ) : (
              <div className="fe-form">

                {/* Ciudad */}
                <select className="fe-select" name="ciudad"
                  value={form.ciudad} onChange={handleChange}>
                  <option value="">Seleccione Ciudad *</option>
                  <option>Bogotá</option>
                  <option>Medellín</option>
                  <option>Cali</option>
                  <option>Barranquilla</option>
                  <option>Cartagena</option>
                </select>

                {/* Fecha */}
                <input
                  className="fe-input"
                  type="date"
                  name="fecha"
                  value={form.fecha}
                  onChange={handleChange}
                />

                {/* Identificador Portal Web */}
                <input
                  className="fe-input"
                  type="text"
                  name="identificador"
                  value={form.identificador}
                  onChange={handleChange}
                  placeholder="Identificador Portal Web *"
                />

                {/* Punto de Venta */}
                <select className="fe-select" name="puntoVenta"
                  value={form.puntoVenta} onChange={handleChange}>
                  <option value="">Seleccione Punto Venta *</option>
                  <option>Torre Sapiencia</option>
                  <option>Titan</option>
                  <option>Parque La Colina</option>
                  <option>Pepe Sierra</option>
                  <option>Calle 109</option>
                  <option>Cedritos</option>
                </select>

                {/* Botón buscar */}
                <div className="fe-form-footer">
                  <button className="fe-btn-buscar" onClick={handleBuscar}>
                    Buscar Orden
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* ══ COLUMNA DERECHA ════════════════════════════════ */}
        <div className="fe-right">

          {/* Imagen "Conoce tu factura" — ya trae el título */}
          <div className="fe-right-header">
            <img src={CONOCE_ICON_URL} alt="Conoce tu factura"
              className="fe-conoce-img" />
          </div>

          {/* Imagen informativa de la factura con enlace */}
          <a
            href="https://tufacturastarbucks.com.co"
            target="_blank"
            rel="noopener noreferrer"
            className="fe-factura-link"
          >
            <img
              src={INFO_FACTURA_URL}
              alt="Información de la factura Starbucks"
              className="fe-factura-img"
            />
          </a>

        </div>
      </div>
    </section>
  );
}