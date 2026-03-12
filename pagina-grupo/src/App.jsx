// App.jsx - Integración con React Router
// Mantiene el Navbar de los compañeros + agrega las páginas de Yesica
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Componentes/Navbar";
import Footer from "./Componentes/Footer";
import Historias from "./pages/Historias";
import NotMilk from "./pages/NotMilk";

// Componente que decide qué mostrar según la ruta
const Layout = () => {
  const { pathname } = useLocation();
  
  // Historias tiene su propio navbar y footer
  const isHistorias = pathname === '/historias';
  // NotMilk no necesita navbar global (tiene su propio header)
  const isNotMilk = pathname === '/notmilk';

  return (
    <>
      {/* Navbar de los compañeros - se oculta en páginas con navbar propio */}
      {!isHistorias && !isNotMilk && <Navbar />}
      
      <Routes>
        {/* Página principal - aquí pueden agregar más contenido los compañeros */}
        <Route path="/" element={<Home />} />
        
        {/* Páginas de Yesica */}
        <Route path="/historias" element={<Historias />} />
        <Route path="/notmilk" element={<NotMilk />} />
      </Routes>
      
      {/* Footer reutilizable - se muestra en todas las páginas excepto Historias */}
      {!isHistorias && <Footer />}
    </>
  );
};

// Página Home temporal - los compañeros pueden modificarla
const Home = () => (
  <main style={{ minHeight: '60vh', padding: '40px 20px', textAlign: 'center' }}>
    <h1>Bienvenido a Starbucks</h1>
    <p>Página en construcción...</p>
    <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
      <a href="/historias" style={{ padding: '12px 24px', background: '#00754a', color: '#fff', borderRadius: '20px', textDecoration: 'none' }}>
        Ver Historias
      </a>
      <a href="/notmilk" style={{ padding: '12px 24px', background: '#1e3932', color: '#fff', borderRadius: '20px', textDecoration: 'none' }}>
        Ver NotMilk
      </a>
    </div>
  </main>
);

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;