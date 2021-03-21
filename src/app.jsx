import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

import Landing from './components/Landing';

const App = () => {
  return (
    <>
      <Landing />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
