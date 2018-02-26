/*
 * Dependencies
 */

// Vendors
import React from 'react';

// API
import API from 'api';

// Components
import Grid from 'components/grid/index.js';
import Spinner from 'components/spinner/index.js';

/*
 * LAYOUT - INDEX
 * ==============
 */
export default class App extends React.Component {

	constructor (props) {
		super(props);

	}

	componentWillMount () {
		this.setState({
			isLoading: false
		});

		// API.test.getFilters()
		// .promise
		// .then(res => {
		// 	this.setState({
		// 		filters: res.data,
		// 		isLoading: false
		// 	});
		// })
		// .catch(res => {
		// 	console.log(res);
		// 	console.log('error');
		// });
	}

	render () {
		const { isLoading, questions } = this.state;

		return (
			<div className="app">
				<h1 className="app__header"> Nick Barth's Tessian Filter </h1>
				{isLoading ? <Spinner /> : <Grid />}
			</div>
		);
	}

}
