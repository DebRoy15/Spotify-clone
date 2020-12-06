import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/_library.sass";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSongs, audioRef, isPlaying, setSongs }) => {
  return (
    <div className="library">
      <h3 className="mb-5 ">Library</h3>
      <Row className="library-songs">
        {songs?.map((song) => (
          <Col md={3}>
            <LibrarySong
              songs={songs}
              song={song}
              setCurrentSongs={setCurrentSongs}
              id={song.id}
              key={song.id}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setSongs={setSongs}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Library;
