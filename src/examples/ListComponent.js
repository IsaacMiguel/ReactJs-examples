import React from 'react';

const NumberList = (props) => {
	const numbers = props.numbers;
	const listItems = numbers.map((number) => 
		<li key={ number.id }>
			{ number }
		</li>
	);

	return(
		<ul>{ listItems }</ul>
	);
}

class List extends React.Component {
	render() {
		const numbers = [1, 2, 3, 4, 5];
		return(
			<NumberList numbers={ numbers } />
		);
	}
}

export default List;