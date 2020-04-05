import React from 'react';
import './App.css';

import About from './About'
import Nav from './Nav'
import Shop from './Shop'
import ItemDetail from './ItemDetail'
import NoMatch from './NoMatch'
import MyFooter from './MyFooter'

import { Switch, Route } from 'react-router-dom'
import { Container, Jumbotron } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/shop/:id' component={ItemDetail}></Route>
        <Route component={NoMatch} />
      </Switch>
      <MyFooter/>
    </div>
  );
}

const Home = () => (
    <Jumbotron className='homepage' fluid>
      <Container>
        <h1 className='pb-5'>WELCOME TO EM'S FORTNITE SHOP</h1>
        <img className='img-fluid' src='https://img.pngio.com/spaceman-fortnite-transparent-png-stickpng-transparent-fortnite-571_724.png' alt='spaceman'/>
      </Container>
    </Jumbotron>
)
export default App;
