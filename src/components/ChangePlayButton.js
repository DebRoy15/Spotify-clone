import React from "react";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

const ChangePlayButton = ({ isPlaying, audioRef, setIsPlaying }) => {
  const playSongHandler = () => {
    // console.log(audioRef.current);
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  if (isPlaying) {
    return (
      <PauseCircleOutlineIcon onClick={playSongHandler} id="play-button" />
    );
  } else {
    return (
      <PlayCircleOutlineRoundedIcon
        onClick={playSongHandler}
        id="play-button"
      />
    );
  }
};

export default ChangePlayButton;
