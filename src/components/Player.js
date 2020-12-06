import React from "react";
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
import { Col, Row } from "react-bootstrap";

const Player = ({
  currentSongs,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSongs,
  setSongs,
}) => {
  const activeLibraryHandler = (nextPrev) => {
    setSongs(
      songs.map((targetSong) => {
        return {
          ...targetSong,
          active: targetSong.id === nextPrev.id,
        };
      })
    );
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  // console.log(songInfo);
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    // console.log(e.target.value);
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSongs.id);
    if (direction === "skip-forward") {
      await setCurrentSongs(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    } else if (direction === "skip-backward") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSongs(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSongs(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };

  return (
    <Row className="player container-fluid">
      {/* song info */}
      <Col md={3} xs={12} className="song-info">
        <div className="d-flex align-items-center">
          <img src={currentSongs.cover} alt="song cover" />
          <div className="song-name-album ">
            <h6>{currentSongs.name}</h6>
            <span>{currentSongs.artist}</span>
          </div>
        </div>

        <FavoriteRoundedIcon />
      </Col>
      {/* paly control */}
      <Col md={6} xs={12} className="song-control">
        <div className="play-control">
          <ThreeSixtyRoundedIcon className="left-button" />
          <SkipPreviousRoundedIcon
            onClick={() => skipTrackHandler("skip-backward")}
            className="left-button"
          />

          <ChangePlayButton
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />

          <SkipNextRoundedIcon
            onClick={() => skipTrackHandler("skip-forward")}
            className="right-button"
          />
          <RepeatRoundedIcon className="right-button" />
        </div>
        <div className="time-control">
          <p>{getTime(songInfo.currentTime)}</p>

          <div
            style={{
              background: `linear-gradient(to right, ${currentSongs.color[0]},${currentSongs.color[1]})`,
            }}
            className="track"
          >
            <input
              value={songInfo.currentTime}
              type="range"
              max={songInfo.duration || 0}
              min={0}
              onChange={dragHandler}
            />
            <div style={trackAnim} className="animate-track"></div>
          </div>

          <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
        </div>
      </Col>
      {/* other stuff */}
      <Col md={3} xs={12} className="other-stuff">
        <MicRoundedIcon />
        <MenuOpenRoundedIcon />
        <AlbumRoundedIcon />
        <VolumeDownRoundedIcon />
        <input type="range" />
      </Col>
    </Row>
  );
};

export default Player;
