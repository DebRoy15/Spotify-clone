import React from "react";
import "../styles/_player.sass";

import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import SkipPreviousRoundedIcon from "@material-ui/icons/SkipPreviousRounded";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
import ThreeSixtyRoundedIcon from "@material-ui/icons/ThreeSixtyRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import MicRoundedIcon from "@material-ui/icons/MicRounded";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";
import AlbumRoundedIcon from "@material-ui/icons/AlbumRounded";

const Player = () => {
  return (
    <div className="player">
      {/* song info */}
      <div className="song-info">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/49/Why_Don%27t_We_-_Fallin%27.jpg"
          alt="song cover"
        />
        <div className="song-name-album">
          <span>Fallin' (Adrenaline)</span>
          <span>Why Don't We</span>
        </div>
        <FavoriteRoundedIcon />
      </div>
      {/* paly control */}
      <div className="song-control">
        <div className="play-control">
          <ThreeSixtyRoundedIcon className="left-button" />
          <SkipPreviousRoundedIcon className="left-button" />

          <PlayCircleOutlineRoundedIcon id="play-button" />

          <SkipNextRoundedIcon className="right-button" />
          <RepeatRoundedIcon className="right-button" />
        </div>
        <div className="time-control">
          <p>Start Time</p>
          <input type="range" max="20" min="0" />
          <p>EndTime</p>
        </div>
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
