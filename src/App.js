import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Player from "./components/Player";

import "./styles/app.sass";
import data from "./components/data.js";

function App() {
  //Ref
  const audioRef = useRef();
  //  State
  const [songs, setSongs] = useState(data());
  const [currentSongs, setCurrentSongs] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  //Event handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: percentage,
    });
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSongs.id);
    await setCurrentSongs(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div>
      <Home
        songs={songs}
        setCurrentSongs={setCurrentSongs}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSongs={currentSongs}
        setCurrentSongs={setCurrentSongs}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSongs.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
