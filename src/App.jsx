import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import NotFound from "./pages/NotFound";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import CoolingAnimation from "./components/CoolingAnimation";

function App() {
  return (
    <BrowserRouter>
      <CoolingAnimation />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <FloatingWhatsapp />
    </BrowserRouter>
  );
}

export default App;