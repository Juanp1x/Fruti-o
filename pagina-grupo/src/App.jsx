import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Componentes/Navbar";
import MenuPrincipal from "./Componentes/MenuPrincipal";
import CartaStarbucks from "./Componentes/CARTA";
import Novedades from "./Componentes/Novedades";
import Rewards from "./Componentes/Rewards";
import Footer from "./Componentes/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />
        <Route path="/carta" element={<CartaStarbucks />} />
        <Route path="/cafe" element={<CartaStarbucks />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;