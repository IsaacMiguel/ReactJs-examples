import React from 'react';

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }

  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  const Greeting = (props) => {
    const loggedIn = props.isLoggedIn;
    return loggedIn ? <UserGreeting /> : <GuestGreeting />;
  }

class Greet extends React.Component {
  render() {
  	return(
      <Greeting isLoggedIn={ false }/>
  	);
  }
}

export default Greet;