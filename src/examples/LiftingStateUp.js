import React from 'react';

const BoilingVerdict = (props) => {
  const value = parseFloat(props.celsius);

  if (!value) {
    return <p>Must enter a number</p>
  }

  if (value > 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value : '' };
  }

  handleChange(e) {
    this.setState({ value : e.target.value });
  }

  render() {
  	const value = this.state.value;
    return(
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={ value }
          onChange={ this.handleChange } />
        <BoilingVerdict
          celsius={ value } />
      </fieldset>
    );
  }
}

export default Calculator;