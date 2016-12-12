import React, { Component } from 'react';

const Element = (props) => {
  const e = <h1>Hello, { props.name }</h1>;

  return e;
}

class CompComponents extends Component {
  render() {
    return(
		  <div>
	      <Element name="Melisa" />
	      <Element name="Miguel" />
	      <Element name="Creed" />
	    </div>
    );
  }
}

export default CompComponents;