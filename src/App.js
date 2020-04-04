import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import Details from './components/Details.jsx';
import Cart from './components/Cart';
import Defailt from './components/Default.jsx';
import Modal from './components/Modal.jsx';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Defailt} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
