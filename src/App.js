import "../src/styles/general.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Navbar from "../src/components/Navbar.js";
import Acceuil from "../src/pages/Acceuil.js";
import Contact from "../src/pages/Contact.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/Acceuil" exact component={Acceuil} />
        <Route path="/Contact" component={Contact} />
        {/* Ajoutez d'autres routes ici pour vos autres pages */}
      </div>
    </Router>
  );
}

export default App;
