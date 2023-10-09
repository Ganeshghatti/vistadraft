import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/About/AboutUs";
// import "./assets/css/style.css";
import Hero from "./pages/Hero/Hero";
import Navbar from "./pages/Navbar/Navbar";
import Career from "./pages/Career/Career";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
