import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import ProductsList from './views/ProductsList';
//import Product from './views/Product';
//import axios from "axios";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/items?search=' component={ProductsList}/>
        </Switch>
      </div>
    );

    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
