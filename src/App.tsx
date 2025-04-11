import Blusinha from "./components/blusinha";
import kitBlusinhas from "./assets/kit-blusinhas.png";
import tubeTopRosa from "./assets/tube-top-rosa.png";
import crocheVerde from "./assets/croche-verde.png";
import "./App.css";
import SearchBar from "./components";

function App() {
  return (
    <div className="app">
      <header className="header">
        <p className="title">uma loja de blusinhas</p>
      </header>
      <div className="content">
        <div className="search-bar-container">
          <SearchBar />
        </div>
        <div className="blusinhas-container">
          <Blusinha
            image={kitBlusinhas}
            price="55,00"
            title="Kit 4 blusinhas"
          />
          <Blusinha image={tubeTopRosa} price="40,00" title="Tube top rosa" />
          <Blusinha
            image={crocheVerde}
            price="65,00"
            title="Blusinha crochê verde"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
