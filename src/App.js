import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = (props) => (
  <div>
    <h1>Hats Page!</h1>
    <button onClick={() => props.history.push('/')}>Click me</button>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
