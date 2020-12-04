import React from "react";
import "../styles/_player.sass";

import PlayArrowTwoToneIcon from "@material-ui/icons/PlayArrowTwoTone";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";

const Player = () => {
  return (
    <div className="player">
      <h1>Player</h1>
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>EndTime</p>
      </div>
      <div className="play-control">
        <ChevronLeftRoundedIcon />
        <PlayArrowTwoToneIcon />
        <ChevronRightRoundedIcon />
      </div>
    </div>
  );
};

export default Player;
