import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Player from "./components/Player";

import "./styles/app.sass";
import data from "./components/Data.js";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSongs, setCurrentSongs] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <Home songs={songs} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSongs={currentSongs}
      />
    </div>
  );
}

export default App;
