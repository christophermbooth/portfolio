import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

import Landing from './components/Landing';
import About from './components/About';

const App = () => {
  return (
    <>
      <Landing />
      <About />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
