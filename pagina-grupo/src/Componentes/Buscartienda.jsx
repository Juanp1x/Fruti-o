import { useState } from "react";
import "./Buscartienda.css";

// ── DATOS DE TIENDAS ──────────────────────────────────────────
const stores = [
  {
    id: 1,
    name: "Torre Sapiencia",
    address: "Avenida Carrera 13 123 60, Bogotá, D.C.",
    closingTime: "21:00",
    abierto24h: false,
    driveThrough: false,
    schedule: [
      { day: "Miércoles", hours: "7:00 – 21:00", isToday: true },
      { day: "Jueves",    hours: "7:00 – 21:00" },
      { day: "Viernes",   hours: "7:00 – 21:00" },
      { day: "Sábado",    hours: "8:00 – 20:00" },
      { day: "Domingo",   hours: "8:00 – 20:00" },
      { day: "Lunes",     hours: "7:00 – 21:00" },
      { day: "Martes",    hours: "7:00 – 21:00" },
    ],
  },
  {
    id: 2,
    name: "Titan",
    address: "Avenida Calle 80, Bogotá, D.C.",
    closingTime: "21:00",
    abierto24h: false,
    driveThrough: true,
    schedule: [
      { day: "Miércoles", hours: "7:00 – 21:00", isToday: true },
      { day: "Jueves",    hours: "7:00 – 21:00" },
      { day: "Viernes",   hours: "7:00 – 21:00" },
      { day: "Sábado",    hours: "8:00 – 20:00" },
      { day: "Domingo",   hours: "8:00 – 20:00" },
      { day: "Lunes",     hours: "7:00 – 21:00" },
      { day: "Martes",    hours: "7:00 – 21:00" },
    ],
  },
  {
    id: 3,
    name: "Parque La Colina",
    address: "Avenida Boyacá, Carrera 72 No. 146-60, Bogotá",
    closingTime: "21:00",
    abierto24h: false,
    driveThrough: true,
    schedule: [
      { day: "Miércoles", hours: "7:00 – 21:00", isToday: true },
      { day: "Jueves",    hours: "7:00 – 21:00" },
      { day: "Viernes",   hours: "7:00 – 21:00" },
      { day: "Sábado",    hours: "8:00 – 20:00" },
      { day: "Domingo",   hours: "8:00 – 20:00" },
      { day: "Lunes",     hours: "7:00 – 21:00" },
      { day: "Martes",    hours: "7:00 – 21:00" },
    ],
  },
  {
    id: 4,
    name: "Pepe Sierra",
    address: "Calle 116 No. 17-23, Bogotá",
    closingTime: "21:00",
    abierto24h: true,
    driveThrough: false,
    schedule: [
      { day: "Miércoles", hours: "7:00 – 21:00", isToday: true },
      { day: "Jueves",    hours: "7:00 – 21:00" },
      { day: "Viernes",   hours: "7:00 – 21:00" },
      { day: "Sábado",    hours: "8:00 – 20:00" },
      { day: "Domingo",   hours: "8:00 – 20:00" },
      { day: "Lunes",     hours: "7:00 – 21:00" },
      { day: "Martes",    hours: "7:00 – 21:00" },
    ],
  },
  {
    id: 5,
    name: "Calle 109",
    address: "Calle 109 15 66, Bogotá, D.C.",
    closingTime: "20:00",
    abierto24h: false,
    driveThrough: false,
    schedule: [
      { day: "Miércoles", hours: "7:00 – 20:00", isToday: true },
      { day: "Jueves",    hours: "7:00 – 20:00" },
      { day: "Viernes",   hours: "7:00 – 20:00" },
      { day: "Sábado",    hours: "8:00 – 20:00" },
      { day: "Domingo",   hours: "8:00 – 20:00" },
      { day: "Lunes",     hours: "7:00 – 20:00" },
      { day: "Martes",    hours: "7:00 – 20:00" },
    ],
  },
  {
    id: 6,
    name: "Cedritos",
    address: "Calle 140 25 73, Bogotá, D.C.",
    closingTime: "20:00",
    abierto24h: true,
    driveThrough: true,
    schedule: [
      { day: "Miércoles", hours: "7:00 – 20:00", isToday: true },
      { day: "Jueves",    hours: "7:00 – 20:00" },
      { day: "Viernes",   hours: "7:00 – 20:00" },
      { day: "Sábado",    hours: "8:00 – 20:00" },
      { day: "Domingo",   hours: "8:00 – 20:00" },
      { day: "Lunes",     hours: "7:00 – 20:00" },
      { day: "Martes",    hours: "7:00 – 20:00" },
    ],
  },
];

// ── MAPA GOOGLE MAPS ──────────────────────────────────────────
const GOOGLE_MAPS_API_KEY = "AIzaSyDlAdc6SPJNUfFZg8Fv2I0tiEuGjZrUFEs";
const MAP_CENTER = "4.7110,-74.0721";
const MAP_ZOOM = 12;

function GoogleMap() {
  const src =
    `https://www.google.com/maps/embed/v1/view` +
    `?key=${GOOGLE_MAPS_API_KEY}` +
    `&center=${MAP_CENTER}` +
    `&zoom=${MAP_ZOOM}`;

  return (
    <div className="store-map-container">
      <iframe
        title="Mapa Starbucks Bogotá"
        className="store-map-iframe"
        src={src}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

// ── MODAL FILTRAR RESULTADOS ──────────────────────────────────
function FilterModal({ filters, onToggle, onReset, onApply, onClose }) {
  const activeCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="filter-overlay" onClick={onClose}>
      <div className="filter-modal" onClick={(e) => e.stopPropagation()}>

        <div className="filter-header">
          <span className="filter-title">Filtrar resultados</span>
          <button className="filter-close" onClick={onClose}>✕</button>
        </div>

        <div className="filter-group">
          <p className="filter-group-title">Horario de la tienda</p>
          <label className="filter-option">
            <input type="checkbox" checked={filters.abierto24h}
              onChange={() => onToggle("abierto24h")} />
            <span className="filter-checkbox-custom" />
            Abierto 24 horas
          </label>
          <label className="filter-option">
            <input type="checkbox" checked={filters.abrir}
              onChange={() => onToggle("abrir")} />
            <span className="filter-checkbox-custom" />
            Abrir ahora
          </label>
        </div>

        <div className="filter-group">
          <p className="filter-group-title">Servicios</p>
          <label className="filter-option">
            <input type="checkbox" checked={filters.driveThrough}
              onChange={() => onToggle("driveThrough")} />
            <span className="filter-checkbox-custom" />
            Drive-Through
          </label>
        </div>

        <div className="filter-footer">
          <button className="filter-reset" onClick={onReset}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="#00704A" strokeWidth="2">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            Reiniciar ({activeCount})
          </button>
          <button className="filter-apply" onClick={onApply}>Solicitar</button>
        </div>

      </div>
    </div>
  );
}

// ── DETALLE DE TIENDA ─────────────────────────────────────────
function StoreDetail({ store, onBack }) {
  return (
    <div className="store-detail-panel">
      <button className="store-back-btn" onClick={onBack}>
        <span className="store-back-arrow">‹</span> Volver
      </button>
      <h2 className="store-detail-name">{store.name}</h2>
      <p className="store-detail-address">{store.address}</p>
      <a href="#" className="store-how-to-get">Cómo llegar ›</a>
      <div className="store-schedule-card">
        <p className="store-schedule-title">Horario de la tienda</p>
        <div className="store-schedule-list">
          {store.schedule.map((s, i) => (
            <div key={i} className={`store-schedule-row ${s.isToday ? "today" : ""}`}>
              <span>{s.day}</span>
              <span>{s.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL — id="buscar-tienda" para el footer
// ══════════════════════════════════════════════════════════════
export default function StoreFinder() {
  const [search, setSearch]               = useState("");
  const [selectedStore, setSelectedStore] = useState(null);
  const [showFilter, setShowFilter]       = useState(false);
  const [filters, setFilters]             = useState({
    abierto24h: false, abrir: false, driveThrough: false,
  });
  const [appliedFilters, setAppliedFilters] = useState({
    abierto24h: false, abrir: false, driveThrough: false,
  });

  const toggleFilter = (key) =>
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));

  const resetFilters = () =>
    setFilters({ abierto24h: false, abrir: false, driveThrough: false });

  const applyFilters = () => {
    setAppliedFilters({ ...filters });
    setShowFilter(false);
  };

  const filtered = stores.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.address.toLowerCase().includes(search.toLowerCase());
    const match24h   = !appliedFilters.abierto24h   || s.abierto24h;
    const matchDrive = !appliedFilters.driveThrough || s.driveThrough;
    return matchSearch && match24h && matchDrive;
  });

  const activeCount = Object.values(appliedFilters).filter(Boolean).length;

  return (
    <section id="buscar-tienda" className="store-section">

      {showFilter && (
        <FilterModal
          filters={filters}
          onToggle={toggleFilter}
          onReset={resetFilters}
          onApply={applyFilters}
          onClose={() => setShowFilter(false)}
        />
      )}

      <div className="store-left-panel">
        {selectedStore ? (
          <StoreDetail
            store={selectedStore}
            onBack={() => setSelectedStore(null)}
          />
        ) : (
          <>
            <div className="store-list-header">
              <h1 className="store-list-title">Tiendas</h1>
              <button
                className={`store-filter-btn ${activeCount > 0 ? "active" : ""}`}
                onClick={() => setShowFilter(true)}
              >
                Filtrar resultados
                {activeCount > 0 && (
                  <span className="filter-badge">{activeCount}</span>
                )}
                <svg width="18" height="18" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="4"  y1="6"  x2="20" y2="6" />
                  <line x1="8"  y1="12" x2="16" y2="12" />
                  <line x1="11" y1="18" x2="13" y2="18" />
                </svg>
              </button>
            </div>

            <div className="store-search-wrapper">
              <input
                className="store-search-input"
                type="text"
                placeholder="Introduzca una ubicación"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg className="store-search-icon" width="18" height="18"
                viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            <div className="store-list">
              {filtered.length === 0 && (
                <p className="store-empty">No se encontraron tiendas.</p>
              )}
              {filtered.map((store) => (
                <div key={store.id} className="store-item">
                  <div className="store-item-info">
                    <p className="store-item-name">{store.name}</p>
                    <p className="store-item-address">{store.address}</p>
                    <p className="store-item-hours">Abierto hasta: {store.closingTime}</p>
                  </div>
                  <button
                    className="store-info-btn"
                    onClick={() => setSelectedStore(store)}
                    title="Ver información"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24"
                      fill="none" stroke="#555" strokeWidth="1.6">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8"  x2="12" y2="8"
                        strokeWidth="2" strokeLinecap="round" />
                      <line x1="12" y1="11" x2="12" y2="17"
                        strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="store-right-panel">
        <GoogleMap />
      </div>

    </section>
  );
}
