/*
 * Dependencies
 */

// Vendors
import React from 'react';

// API
import API from 'api';

// Components
import Question from 'components/question/index.js';
import Button from 'components/button/index.js';
import Spinner from 'components/spinner/index.js';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

/*
 * GRID - INDEX
 * ==============
 */
export default class Grid extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			params: {
				milestone: 'none',
				state: 'open',
				creator: null,
				mentioned: null,
				labels: null,
				sort: 'created',
				direction: 'desc'
			},
			query: ''
		};
	}

	handleSubmit () {
		const { params } = this.state;

		const query = Object.keys(params)
			.filter(i => params[i] !== null)
			.map(k => k + '=' + params[k])
			.join('&');

		this.setState({
			query: query
		});

	}

	handleChange (key) {
		return (change) => {
			const value = change.target ? change.target.value : change.value;

			this.setState({
				params: {
					...this.state.params,
					[key]: value === '' ? null : value
				}
			});
		};
	}


	render () {
		const { isLoading, score, params, query } = this.state;
		const { filter, state, labels, sort, direction } = params;

		return (
			<div className="grid">
				<div className='grid__results'>
					{query}
				</div>

				<div className="grid__container">
					<div className='grid__input-container'>
						<h4> Milestone </h4>
						<input name="form-milestone" className="grid__input--text"
							onChange={this.handleChange('milestone')}
						/>
					</div>
					<div className='grid__input-container'>
						<h4> State </h4>
						<Select
							name="form-state"
							value={state}
							onChange={this.handleChange('state')}
							className="grid__input"
							options={[
								{ value: 'closed', label: 'Closed' },
								{ value: 'all', label: 'All' },
								{ value: 'open', label: 'Open' },
							]}
						/>
					</div>
					<div className='grid__input-container'>
						<h4> Assignee </h4>
						<input name="form-assignee" className="grid__input--text"
							onChange={this.handleChange('assignee')}
						/>
					</div>
					<div className='grid__input-container'>
						<h4> Creator </h4>
						<input name="form-creator" className="grid__input--text"
							onChange={this.handleChange('creator')}
						/>
					</div>
					<div className='grid__input-container'>
						<h4> Mentioned </h4>
						<input name="form-mentioned" className="grid__input--text"
							onChange={this.handleChange('mentioned')}
						/>
					</div>
					<div className='grid__input-container'>
						<h4> Labels, enter csv </h4>
						<input name="form-label" className="grid__input--text"
							onChange={this.handleChange('labels')}
						/>
					</div>
					<div className='grid__input-container'>
						<h4> Sort by </h4>
						<Select
							name="form-sort"
							value={sort}
							onChange={this.handleChange('sort')}
							className="grid__input"
							options={[
								{ value: 'created', label: 'Created' },
								{ value: 'comments', label: 'Comments' },
								{ value: 'updated', label: 'Updated' },
							]}
						/>
					</div>

					<div className='grid__input-container'>
						<h4> Sort Direction </h4>
						<Select
							name="form-direction"
							value={direction}
							onChange={this.handleChange('direction')}
							className="grid__input"
							options={[
								{ value: 'asc', label: 'Asc' },
								{ value: 'desc', label: 'Desc' },
							]}
						/>
					</div>

					<Button text={"Submit"} submit click={() => this.handleSubmit()} />

				</div>
			</div>
		);
	}
}
