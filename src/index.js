import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import './index.css';
//import HelloWorld from './HelloWorld';
//import Tick from './examples/tickClock';
//import CompComponent from './examples/ComposingComponent';
//import StateClock from './examples/StateClock';
//import Toggle from './examples/Toggle';
//import Greeting from './examples/Greeting';
//import Variables from './examples/Variables';
//import PrevRendering from './examples/PrevRendering';
//import ListComponent from './examples/ListComponent';
//import Form from './examples/Form';
//import SelectedTag from './examples/SelectedTag';
//import LiftingStateUp from './examples/LiftingStateUp';
//import LiftStateUpSecondInput from './examples/LiftStateUpSecondInput';
import Containment from './examples/Containment';

ReactDOM.render(
  <Containment />,
  document.getElementById('root')
);

// const updated = () => {
// 	ReactDOM.render(
// 	  <Tick />,
// 	  document.getElementById('root')
// 	);	
// }

// this its for update/Tick example
//setInterval(updated, 1000);