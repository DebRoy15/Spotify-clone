import React, { useState, useRef } from "react";
import "../styles/_player.sass";

import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import SkipPreviousRoundedIcon from "@material-ui/icons/SkipPreviousRounded";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
import ThreeSixtyRoundedIcon from "@material-ui/icons/ThreeSixtyRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import MicRoundedIcon from "@material-ui/icons/MicRounded";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";
import AlbumRoundedIcon from "@material-ui/icons/AlbumRounded";

import ChangePlayButton from "./ChangePlayButton";

const Player = ({ currentSongs, isPlaying, setIsPlaying }) => {
  // State
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
  });
  //Ref
  const audioRef = useRef();

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  //Event handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, current, duration });
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, current: e.target.value });
  };

  return (
    <div className="player">
      {/* song info */}
      <div className="song-info">
        <img src={currentSongs.cover} alt="song cover" />
        <div className="song-name-album">
          <h6>{currentSongs.name}</h6>
          <span>{currentSongs.artist}</span>
        </div>
        <FavoriteRoundedIcon />
      </div>
      {/* paly control */}
      <div className="song-control">
        <div className="play-control">
          <ThreeSixtyRoundedIcon className="left-button" />
          <SkipPreviousRoundedIcon className="left-button" />

          <ChangePlayButton
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />

          <SkipNextRoundedIcon className="right-button" />
          <RepeatRoundedIcon className="right-button" />
        </div>
        <div className="time-control">
          <p>{getTime(songInfo.current)}</p>
          <input
            type="range"
            min={0}
            max={songInfo.duration}
            value={songInfo.current}
            onChange={dragHandler}
          />
          <p>{getTime(songInfo.duration)}</p>
        </div>
        <audio
          onLoadedMetadata={timeUpdateHandler}
          onTimeUpdate={timeUpdateHandler}
          ref={audioRef}
          src={currentSongs.audio}
        ></audio>
      </div>
      {/* other stuff */}
      <div className="other-stuff">
        <MicRoundedIcon />
        <MenuOpenRoundedIcon />
        <AlbumRoundedIcon />
        <VolumeDownRoundedIcon />
        <input type="range" />
      </div>
    </div>
  );
};

export default Player;
