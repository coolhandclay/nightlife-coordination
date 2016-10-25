import React from "react";

import NlcStore from "../stores/NlcStore";
import Bar from "../components/Bar";
import * as NlcActions from "../actions/NlcActions";

export default class BarList extends React.Component {

	constructor() {
		super();
		this.state = {
			bars: NlcStore.getAll()
		};
	}

	componentWillMount() {
		NlcStore.on('change', this.getBars);
	}

	componentWillUnmount() {
		NlcStore.removeListener('change', this.getBars);
	}

	getBars() {
		this.setState({
			bars: NlcStore.getAll()
		})
	}

	reloadBars() {
		NlcActions.loadBars();
	}

	render() {

		const { bars } = this.state;

		const BarComponents = bars.map((bar) => {
			return <Bar key={bar.id} {...bar} />;
		});

		return (
			<div class='container'>
				<form class='form-inline'>
					<input type='text' class='form-control' placeholder='Type a bar'/>
					<button type='submit' class='btn btn-primary'>Go</button>
				</form>
				<ul>
					{BarComponents}
				</ul>
				<button onClick={this.reloadBars.bind(this)}>Reload!</button>
			</div>
		);
	}

}