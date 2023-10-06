import "../src/styles/general.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
// import Navbar from "../src/components/Navbar.js";
import Head from './Routes';

function App() {
  return (
    <>
    
      {/* <Navbar /> */}
      <div className="App">
        <Head />
      </div>
  );
}

export default App;
