import React from "react";

export default class Layout extends React.Component {
	render() {
		return (
			<div class='container'>
				<h1>Come Drink Tonight!</h1>
				<br/>
				<img height='300px' src='http://clipartix.com/wp-content/uploads/2016/08/Martini-glass-martini-clipart-clipart-kid.jpeg' alt='sleek martini'/>
				<h5>An app for seeing who's getting drinks where, TONIGHT!</h5>
				{this.props.children}
			</div>
		);
	}
}