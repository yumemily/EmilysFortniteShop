import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const Home = () => {
  return (
    <Jumbotron className="homepage" fluid>
      <Container>
        <h1 className="pb-5">WELCOME TO EM'S FORTNITE SHOP</h1>
        <img
          className="img-fluid"
          src="https://img.pngio.com/spaceman-fortnite-transparent-png-stickpng-transparent-fortnite-571_724.png"
          alt="spaceman"
        />
      </Container>
    </Jumbotron>
  );
};

export default Home;
