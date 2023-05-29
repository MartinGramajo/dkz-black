import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./esp/pages/Home";
import ScrollToTop from "./esp/components/ScrollToTop";
import Wapp from "./esp/components/wapp/Wsp";
import Conocenos from "./esp/pages/Conocenos";
import Novedades from "./esp/pages/Novedades";
import Casos from "./esp/pages/Casos";
import Contacto from "./esp/pages/Contacto";
import TrabajaConNosotros from "./esp/pages/TrabajaConNosotros";
import ProducionAV from "./esp/pages/ProducionAV";
import EventosPage from "./esp/pages/EventosPage";
import SitiosWeb from "./esp/pages/SitiosWeb";
import SocialMedialPage from "./esp/pages/SocialMediaPage";
import Consultoria from "./esp/pages/Consultoria";
import Coberturas from "./esp/pages/Coberturas";
import Publicidad from "./esp/pages/Publicidad";
import Investigacion from "./esp/pages/Investigacion";
import { FooterReact } from "./esp/components/FooterReact/FooterReact";
import { NavbarReactV2 } from "./esp/components/navbarReactV2/NavbarReactV2";

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <BrowserRouter>
                <NavbarReactV2 />
                <Wapp />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/conocenos" element={<Conocenos />} />
                    <Route path="/novedades" element={<Novedades />} />
                    <Route path="/casos" element={<Casos />} />
                    <Route path="/contactanos" element={<Contacto />} />
                    <Route path="/trabajaconnosotros" element={<TrabajaConNosotros />} />
                    <Route path="/audiovisuales" element={<ProducionAV />} />
                    <Route path="/eventos" element={<EventosPage />} />
                    <Route path="/sitiosweb" element={<SitiosWeb />} />
                    <Route path="/socialmedia" element={<SocialMedialPage />} />
                    <Route path="/consultoria" element={<Consultoria />} />
                    <Route path="/coberturas" element={<Coberturas />} />
                    <Route path="/publicidad" element={<Publicidad />} />
                    <Route path="/investigacion" element={<Investigacion />} />
                </Routes>
                <FooterReact />
            </BrowserRouter>
        </div>
    );
}

export default App;
