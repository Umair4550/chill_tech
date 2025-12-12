import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
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
      </Routes>
      
      <Footer />
      <FloatingWhatsapp />
    </BrowserRouter>
  );
}

export default App;