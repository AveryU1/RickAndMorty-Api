import "./App.css";
import Locations from "./components/Locations";
import axios from "axios";
import Input from "./components/Input";
import React, { useEffect, useState } from "react";
import Residents from "./components/Residents";
function App() {
  const [locations, setLocations] = useState({});
  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => {
        setLocations(res.data);
      });
  }, []);
  const [input, setInput] = useState("");

  const inputSearch = e => {
    e.preventDefault();
    axios.get(`https://rickandmortyapi.com/api/location/${input}`).then(res => {
      setLocations(res.data);
    });
  };

  console.log(locations);

  return (
    <div className="App">
      <header>
        <div className="main-title-container">
          <h1 className="main-title">Rick and Morty</h1>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <div>
            <Input
              input={input}
              inputSearch={inputSearch}
              setInput={setInput}
            ></Input>
            <Locations locations={locations}></Locations>
          </div>
          <div>
            <ul className="container-cards">
              {locations.residents?.map(resident => (
                <Residents resident={resident} key={resident}></Residents>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
