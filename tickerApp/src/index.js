import 'velocity-animate'
import 'velocity-animate/velocity.ui'
import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from '../../src/demo/MainComponent.jsx';

//render(  <MainComponent />, document.getElementById("root"));
ReactDOM.render(
  React.createElement(MainComponent),
  document.getElementById('root')
);
