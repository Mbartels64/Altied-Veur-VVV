import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavbarBS() {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i0.wp.com/altiedveurvvv.com/wp-content/uploads/2021/05/cropped-logo_large-1.png?fit=817%2C1500&ssl=1"
              height="40"
              className="d-inline-block align-center"
            />{" "}
            Altied Veur VVV
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/forum">Forum</Nav.Link>
              <Nav.Link href="/socials">Socials</Nav.Link>
              <Nav.Link href="/signin">Log In</Nav.Link>
              <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBS;
