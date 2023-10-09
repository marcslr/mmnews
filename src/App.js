import "../src/styles/general.css";
import React, { useEffect, useState } from "react";
import Head from "./Routes";
import Menu from "./components/Menu.js";
import NewsList from "./components/NewsList";

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-healines?country=fr&category=${category}&apiKey=40fe80ab18514482872006fbd868527c`
    )
      .then((res) => res.json())
      .then((data) => console.log(data.articles));
  }, [category]);

  return (
    <>
      {/* <Navbar /> */}
      <div className="App">
        <Head />
        <Menu active={active} setactive={setActive} setCategory={setCategory} />
        <NewsList />
      </div>
    </>
  );
}

export default App;
