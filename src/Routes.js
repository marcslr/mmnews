import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Acceuil.js";
import Sports from "./pages/Sports.js";
import Meteo from "./pages/Meteo.js";
import Contact from "./pages/Contact.js";
import Error from "./pages/Error.js";

export default function Head() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/meteo" element={<Meteo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
