import React from "react";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import {
  Button,
  Card,
  CardDeck,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const HomeSongs = () => {
  return (
    <div className="">
      <Navbar sticky="top" className="navbar " collapseOnSelect>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto page-change-arrows">
            <Nav.Link href="#features">
              {" "}
              <ArrowBackIosRoundedIcon />
            </Nav.Link>
            <Nav.Link href="#pricing">
              <ArrowForwardIosRoundedIcon />
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              className="pt-2"
              title="Dev"
              menuAlign="right"
              id="dropdown-menu-align-right"
            >
              <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link>
              <Button className="home-navbar-button">Upgrades</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="songs-main-section">
        <div className="ml-2">
          <h2 className="mb-4">Shortcuts</h2>
          <CardDeck className="w-100 m-0">
            <Card className="p-3 ml-0">
              <Card.Img variant="top" src="/images/playlist-cover.png" />
              <Card.Body className="p-0">
                <Card.Title>Daily Mix 1</Card.Title>
                <Card.Text>Ava Max, james Arthur, Vigiland and more</Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-3 ml-0">
              <Card.Img variant="top" src="/images/playlist-cover.png" />
              <Card.Body className="p-0">
                <Card.Title>Today's Top Hits</Card.Title>
                <Card.Text>
                  Billie eilish is on top of the Hottest 50!
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-3 ml-0">
              <Card.Img variant="top" src="/images/playlist-cover.png" />
              <Card.Body className="p-0">
                <Card.Title>Pop Sauce</Card.Title>
                <Card.Text>
                  Your favorite artists, straight to the sauce!...
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-3 ml-0">
              <Card.Img variant="top" src="/images/playlist-cover.png" />
              <Card.Body className="p-0">
                <Card.Title>Mega Hit Mix</Card.Title>
                <Card.Text>
                  A mega mix of 75 of your favorite songs from the...
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-3 ml-0">
              <Card.Img variant="top" src="/images/playlist-cover.png" />
              <Card.Body className="p-0">
                <Card.Title>Calming Instrument...</Card.Title>
                <Card.Text>By Sheri</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
    </div>
  );
};

export default HomeSongs;
