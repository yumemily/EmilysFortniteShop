import React from "react";
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ItemDetail from "./pages/ItemDetail";
import NoMatch from "./pages/NoMatch";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetail}></Route>
        <Route path="*" component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
