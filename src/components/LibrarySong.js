import React from "react";
import { Card } from "react-bootstrap";

const LibrarySong = ({
  songs,
  song,
  setCurrentSongs,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    // const selectedSong = songs.filter((s) => s.id === id);
    // setCurrentSongs(selectedSong[0]);
    await setCurrentSongs(song);

    //Add active state
    // const newSongs = songs.map((song) => {
    //   if (song.id === id) {
    //     return {
    //       ...song,
    //       active: true,
    //     };
    //   } else {
    //     return {
    //       ...song,
    //       active: false,
    //     };
    //   }
    // });
    // setSongs(newSongs);
    setSongs(
      songs.map((targetSong) => {
        return {
          ...targetSong,
          active: targetSong.id === song.id,
        };
      })
    );

    // check is song is playing
    if (isPlaying) audioRef.current.play();
  };

  return (
    // <div className="library-song">
    //   <img src={song.cover} alt={song.name} />
    //   <h3>{song.name}</h3>
    //   <h4>{song.artist}</h4>
    // </div>
    <Card
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <Card.Img variant="top" src={song.cover} />
      <Card.Body>
        <Card.Title>{song.name}</Card.Title>
        <Card.Text>{song.artist}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LibrarySong;
