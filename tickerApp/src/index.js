/***  examples/src/index.js ***/
import React from 'react';
import { render} from 'react-dom';
import TickerComponent from '../../src';
const App = () => (
    <TickerComponent />
);
render(<App />, document.getElementById("root"));
