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
import Nav from './components/Nav';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
