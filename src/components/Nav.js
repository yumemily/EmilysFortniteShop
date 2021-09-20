import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Form, Nav } from "react-bootstrap";
// LOL emily it's right here
// you're calling Nav inside Nav itself, infinite loop i see i see xD kkk cya

export default function MySuperNav() {
  return (
    <Navbar className="nav-bar" bg="dark" variant="dark">
      <Navbar.Brand href="/">EM'S FORTNITE SHOP</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
      </Nav>
      <Form inline></Form>
    </Navbar>
  );
}
