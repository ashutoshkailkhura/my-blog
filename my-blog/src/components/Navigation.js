import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="sm">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            React Bootstrap
          </Navbar.Brand>
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about">About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/articals-list">Articals</Link>
          </Nav.Item>
        </Container>
      </Navbar>
    </>
  );
}
