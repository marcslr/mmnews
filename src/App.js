import "../src/styles/general.css";
import React from "react";
import Head from "./Routes";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="App">
        <Head />
        <Accueil />
      </div>
    </>
  );
}

export default App;
