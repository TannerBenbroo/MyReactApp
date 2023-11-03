import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Resume } from './components/Resume';
import { Home } from './components/Home';

const App = () => (
  <Router>
    <div style={{ color: 'black', padding: '12px', fontSize: '16px' }}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;