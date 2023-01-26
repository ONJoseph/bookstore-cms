import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import Books from './books/Books';
import Category from './categories/Categories';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Books />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
