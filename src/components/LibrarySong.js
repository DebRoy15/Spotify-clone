import React from "react";
import { Button, Card } from "react-bootstrap";

const LibrarySong = ({ song }) => {
  return (
    // <div className="library-song">
    //   <img src={song.cover} alt={song.name} />
    //   <h3>{song.name}</h3>
    //   <h4>{song.artist}</h4>
    // </div>
    <Card className="library-song">
      <Card.Img variant="top" src={song.cover} />
      <Card.Body>
        <Card.Title>{song.name}</Card.Title>
        <Card.Text>{song.artist}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LibrarySong;
