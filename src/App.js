import "../src/styles/general.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "../src/components/Navbar.js";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App"></div>
    </Router>
  );
}

export default App;
