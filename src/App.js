import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

//import pages
import Home from './components/pages/Home'
import ProductDetail from './components/pages/ProductDetail'
import Auth from './components/pages/Auth'

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/product/:product_id' component={ProductDetail}/>
            <Route exact path='/login' component={Auth}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
