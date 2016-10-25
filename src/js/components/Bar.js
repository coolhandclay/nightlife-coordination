import React from "react";

export default class Bar extends React.Component {

	render() {
		console.log(this.props);
		return (
			<div>
				{JSON.stringify(this.props)}
			</div>
		);
	}
}