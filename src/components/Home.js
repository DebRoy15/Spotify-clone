import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/_home.sass";
import HomeMenu from "./HomeMenu";
import HomeSongs from "./HomeSongs";

const Home = ({ songs }) => {
  return (
    <div className="container-fluid">
      <Row id="home">
        <Col md={2} className="menu">
          <HomeMenu />
        </Col>
        <Col md={10} className="main-part">
          <HomeSongs songs={songs} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
