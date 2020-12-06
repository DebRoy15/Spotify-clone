import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/_home.sass";
import HomeMenu from "./HomeMenu";
import HomeSongs from "./HomeSongs";

const Home = ({ songs, setCurrentSongs, audioRef, isPlaying, setSongs }) => {
  return (
    <div className="container-fluid">
      <Row id="home">
        <Col md={2} className="menu">
          <HomeMenu />
        </Col>
        <Col md={10} className="main-part">
          <HomeSongs
            songs={songs}
            setCurrentSongs={setCurrentSongs}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
