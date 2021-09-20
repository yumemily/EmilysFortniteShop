import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Jumbotron, Container } from "react-bootstrap";
import Spinner from "../components/Spinner";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    await fetch("https://fortniteapi.io/v2/items/upcoming?lang=en", {
      method: "GET",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_API,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success", data);
        setItems(data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const itemsHtml = items.map((item) => {
    return (
      <Card className={`card ${item.rarity.name || "Standard"}`}>
        <Card.Title className="p-3">
          <img
            style={{ width: "2rem", paddingRight: ".5rem" }}
            src="https://fortnite-public-files.theapinetwork.com/fortnite-vbucks-icon.png"
            alt="v-bucks-icon"
          />
          {item.price}
        </Card.Title>
        <Card.Img className="p-2" variant="top" src={item.images.icon} />
        <Card.Footer className="card-footer">
          <Link className="stretched-link" to={`/shop/${item.id}`}>
            {item.name}
          </Link>
        </Card.Footer>
      </Card>
    );
  });

  if (loading) return <Spinner />;

  return (
    <div className="mb-5">
      <Jumbotron fluid>
        <Container className="shop-description jumbotron-container">
          <h1 style={{ fontSize: "3rem" }}>FORTNITE ITEM SHOP</h1>
          <h3>
            Check out all of the upcoming Fortnite skins and other cosmetics
            available in the shop today. When clicking on a skin or any other
            cosmetic, you’ll find the official description, price, item type,
            and item set.
          </h3>
        </Container>
      </Jumbotron>
      <Container>
        <div className="store-heading-one">
          <div className="jumbotron-container">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SI EST
            NIHIL NISI ELIT
          </div>
        </div>
        <div className="store-heading-two">CURRENT STORE</div>
      </Container>
      <div className="container">
        <Row style={{ justifyContent: "space-around" }}>{itemsHtml}</Row>
      </div>
    </div>
  );
}
