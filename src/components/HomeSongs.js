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
import Library from "./Library";

const HomeSongs = ({ songs }) => {
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
        <Library songs={songs} />
      </div>
    </div>
  );
};

export default HomeSongs;
