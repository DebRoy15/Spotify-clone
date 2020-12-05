import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Player from "./components/Player";

import "./styles/app.sass";

function App() {
  return (
    <div>
      <Home />
      <Player />
    </div>
  );
}

export default App;
