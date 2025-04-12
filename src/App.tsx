import React, { useState } from "react";
import Blusinha from "./components/blusinha";
import kitBlusinhas from "./assets/kit-blusinhas.png";
import tubeTopRosa from "./assets/tube-top-rosa.png";
import crocheVerde from "./assets/croche-verde.png";
import "./App.css";
import SearchBar from "./components";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const blusinhasList = [
    { image: kitBlusinhas, price: "55,00", title: "Kit 4 blusinhas" },
    { image: tubeTopRosa, price: "40,00", title: "Tube top rosa" },
    { image: crocheVerde, price: "65,00", title: "Blusinha crochê verde" },
  ];

  const filteredBlusinhas = blusinhasList.filter((blusinha) =>
    blusinha.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <p className="title">uma loja de blusinhas</p>
      </header>
      <div className="content">
        <div className="search-bar-container">
          <SearchBar onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className="blusinhas-container">
          {filteredBlusinhas.map((blusinha, index) => (
            <Blusinha
              key={index}
              image={blusinha.image}
              price={blusinha.price}
              title={blusinha.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;