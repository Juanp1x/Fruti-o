import { useState } from "react";
import "./Sugerenciasreclamos.css";

const LOGO_URL        = "https://contacto.miexperienciastarbucks.com.co/assets/images/Facturacion/Starbucks/LogoStarbucks.png";
const STATUS_ICON_URL = "https://contacto.miexperienciastarbucks.com.co/assets/images/Facturacion/Starbucks/ConoceServicio.png";

export default function SugerenciasReclamos() {
  const [form, setForm] = useState({
    documento: "", nombre: "", apellido: "",
    correo: "", telefono: "", direccion: "",
    ciudad: "", puntoVenta: "", servicio: "", detalle: "",
  });

  const [solicitud,    setSolicitud]    = useState("");
  const [formEnviado,  setFormEnviado]  = useState(false);
  const [estadoResult, setEstadoResult] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleEnviar = () => {
    if (form.nombre && form.correo) setFormEnviado(true);
  };

  const handleConsultar = () => {
    if (solicitud.trim()) {
      setEstadoResult(
        solicitud === "12345"
          ? "✅ Solicitud #12345 — En proceso. Tiempo estimado: 24h."
          : `⚠️ No se encontró la solicitud #${solicitud}.`
      );
    }
  };

  return (
    <section id="atencion-cliente">
      <div className="ac-layout">

        {/* ══ COLUMNA IZQUIERDA ══════════════════════════════ */}
        <div className="ac-left">

          {/* Ola SVG orgánica */}
          <svg className="ac-wave-bg" viewBox="0 0 600 900"
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

          {/* Solo el logo, sin texto al lado */}
          <div className="ac-left-header">
            <img src={LOGO_URL} alt="Starbucks" className="ac-logo-img" />
          </div>

          {/* Tarjeta formulario */}
          <div className="ac-form-card">
            <div className="ac-form-heading">
              <p className="ac-form-title">Servicio al Cliente</p>
              <p className="ac-form-subtitle">
                Tu opinión es muy importante para nosotros. Gracias por contactarnos.
              </p>
            </div>

            {formEnviado ? (
              <div className="ac-success-msg">
                <svg width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="#00704A" strokeWidth="2.2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                ¡Formulario enviado! Nos pondremos en contacto pronto.
              </div>
            ) : (
              <div className="ac-form">

                <div className="ac-doc-row">
                  <input className="ac-input" name="documento"
                    value={form.documento} onChange={handleChange}
                    placeholder="Numero Documento de Consumo" />
                  <div className="ac-help-icon" title="Ayuda">?</div>
                </div>

                <div className="ac-form-row">
                  <input className="ac-input" name="nombre"
                    value={form.nombre} onChange={handleChange}
                    placeholder="Nombre *" />
                  <input className="ac-input" name="apellido"
                    value={form.apellido} onChange={handleChange}
                    placeholder="Apellido *" />
                </div>

                <div className="ac-form-row">
                  <input className="ac-input" name="correo" type="email"
                    value={form.correo} onChange={handleChange}
                    placeholder="Correo Electronico *" />
                  <input className="ac-input" name="telefono" type="tel"
                    value={form.telefono} onChange={handleChange}
                    placeholder="Teléfono *" />
                </div>

                <input className="ac-input" name="direccion"
                  value={form.direccion} onChange={handleChange}
                  placeholder="Dirección *" />

                <div className="ac-form-row">
                  <select className="ac-select" name="ciudad"
                    value={form.ciudad} onChange={handleChange}>
                    <option value="">Seleccione Ciudad *</option>
                    <option>Bogotá</option>
                    <option>Medellín</option>
                    <option>Cali</option>
                    <option>Barranquilla</option>
                    <option>Cartagena</option>
                  </select>
                  <select className="ac-select" name="puntoVenta"
                    value={form.puntoVenta} onChange={handleChange}>
                    <option value="">Seleccione Punto Venta *</option>
                    <option>Torre Sapiencia</option>
                    <option>Titan</option>
                    <option>Parque La Colina</option>
                    <option>Pepe Sierra</option>
                    <option>Calle 109</option>
                    <option>Cedritos</option>
                  </select>
                </div>

                <select className="ac-select" name="servicio"
                  value={form.servicio} onChange={handleChange}>
                  <option value="">Seleccione Servicio *</option>
                  <option>Queja</option>
                  <option>Reclamo</option>
                  <option>Sugerencia</option>
                  <option>Felicitación</option>
                  <option>Solicitud de información</option>
                </select>

                <button className="ac-btn-upload" type="button">
                  <svg width="15" height="15" viewBox="0 0 24 24"
                    fill="none" stroke="white" strokeWidth="2.2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  Cargar Archivos
                </button>

                <textarea className="ac-textarea" name="detalle"
                  value={form.detalle} onChange={handleChange}
                  placeholder="Detalle *" rows={4} />

                <div className="ac-form-footer">
                  <button className="ac-btn-submit" onClick={handleEnviar}>
                    Enviar
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* ══ COLUMNA DERECHA ════════════════════════════════ */}
        <div className="ac-right">

          {/* Imagen grande que ya trae el título "Estado del Servicio" */}
          <div className="ac-status-header">
            <img src={STATUS_ICON_URL} alt="Estado del Servicio"
              className="ac-status-icon-img" />
          </div>

          {/* Tarjeta consulta */}
          <div className="ac-status-card">
            <p className="ac-status-label">
              Ingrese el numero de solicitud al que le desea consultar su estado:
            </p>
            <input
              className="ac-status-input"
              type="text"
              placeholder="Numero de Solicitud *"
              value={solicitud}
              onChange={(e) => { setSolicitud(e.target.value); setEstadoResult(null); }}
            />
            <div className="ac-status-row">
              <button className="ac-btn-consultar" onClick={handleConsultar}>
                Consultar
              </button>
            </div>

            {estadoResult && (
              <div className="ac-query-result">{estadoResult}</div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}