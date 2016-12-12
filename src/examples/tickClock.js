import React, { Component } from 'react';

let tick = () => {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  return element;
}

class tickClock extends Component {
  render() {
    return(
      tick()
    );
  }
}

export default tickClock;