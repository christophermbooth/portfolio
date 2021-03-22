import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Landing from './components/Landing';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
