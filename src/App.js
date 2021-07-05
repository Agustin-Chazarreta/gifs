import React, { useState, useEffect } from "react";
import "./App.css";
import getGifs from "./getGifs";
function App() {
  const [gifs, setGifs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    getGifs({ keyword: inputValue }).then((gifs) => setGifs(gifs));
  }, [inputValue]);
  return (
    <div className="App">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <section className="App-content">
        {gifs.map((sigleGif) => (
          <img src={sigleGif.url} key={sigleGif.id} />
        ))}
      </section>
    </div>
  );
}

export default App;
