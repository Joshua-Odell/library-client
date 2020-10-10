import React, { Component } from 'react';
import config from '../config';

//This page should display a single books details when clicked on it should also contain a delete function to remove the book from the list
export default class BookDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: null,
			wish: this.props.wish,
			title: 'TITLE',
			author: 'AUTHOR',
			genere: 'ACTION',
			lent: false,
			completed: false,
		};
	}

	// TODO:
	// I need to fix the Wish List Book Detail Calls

	componentWillMount() {
		this.BookFetcher();
	}

	BookFetcher = () => {
		let extension = '/library/';
		console.log(this.props.wish);
		if (this.state.wish) {
			extension = '/wish/';
		}
		fetch(config.API_ENDPOINT + extension + this.props.match.params.id, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				'access-control-allow-origin': '*',
			},
		})
			.then((res) => res.json())
			.then((data) => this.FetchedStateSetter(data[0]));
	};

	FetchedStateSetter = (data) => {
		this.setState({ title: data.title });
		this.setState({ author: data.author });
		this.setState({ genere: data.genere });
		if (!this.state.wish) {
			this.setState({ lent: data.lent });
			this.setState({ completed: data.completed });
		}
	};

	BookUpdater = () => {
		fetch(config.API_ENDPOINT + '/library/' + this.props.match.params.id, {
			method: 'PATCH',
			body: JSON.stringify({
				lent: this.state.lent,
				completed: this.state.completed,
			}),
			headers: {
				'content-type': 'application/json',
				'access-control-allow-origin': '*',
			},
		}).then((res) => res.json());
	};

	// A general purpose state updater
	StateUpdate = (property) => {
		return (event) => {
			const {
				target: { value },
			} = event;
			this.setState({ [property]: value });
			this.BookUpdater();
		};
	};

	// This converts the string returned from the list to a boolean for ease of use on the server side
	ConversionToBool = (property) => {
		if (this.state.property === 'true') {
			this.setState({ [property]: true });
		} else if (this.state.property === 'false') {
			this.setState({ [property]: false });
		}
	};

	// I prefer a yes or no for user interaction
	BoolConversion = (bool) => {
		if (bool) {
			return 'Yes';
		} else {
			return 'No';
		}
	};

	// DeleteHandler is called from the book details section to remove an item from the db
	DeleteHandler = () => {
		this.ConversionToBool('lent');
		this.ConversionToBool('completed');
		let extension = '/library/';
		if (this.state.wish) {
			extension = '/wish/';
		}
		fetch(config.API_ENDPOINT + extension + this.props.match.params.id, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
				'access-control-allow-origin': '*',
			},
		}).then((res) => res.json());
		this.setState({ redirect: '/' });
	};

	// Lent and Completed section is commented out for itteration purposes to get more feedback on this feature
	Display = () => {
		if (this.state.wish) {
			return (
				<div className="bookDetails">
					<div className="container">
						<div id="Title" className="item">
							Title: {this.state.title}{' '}
						</div>
						<div className="item">
							<button type="button" onClick={this.DeleteHandler.bind(this)}>
								Delete Book
							</button>
						</div>
					</div>
					<div>
						<div id="Author">Author: {this.state.author} </div>
						<div id="Genere">Genere: {this.state.genere} </div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="bookDetails">
					<div className="container">
						<div id="Title" className="item">
							<h2>{this.state.title}</h2>
						</div>
						<div className="item" onClick={this.DeleteHandler.bind(this)}>
							<button type="button">Delete Book</button>
						</div>
					</div>
					<div>
						<div id="Author">Author: {this.state.author} </div>
						<div id="Genere">Genere: {this.state.genere} </div>
						{/* <div id="Lent">
							Lent Out: {this.BoolConversion(this.state.lent)}{' '}
						</div>
						<div id="Completed">
							Completed: {this.BoolConversion(this.state.completed)}{' '}
						</div> */}
					</div>
					<div>
						<div>
							<label htmlFor="Lent">Lent Out: </label>
							<select id="Lent" name="Lent" onChange={this.StateUpdate('lent')}>
								<option value="false">No</option>
								<option value="true">Yes</option>
							</select>
						</div>
						<div>
							<label htmlFor="Completed">Completed: </label>
							<select
								id="Completed"
								name="Completed"
								onChange={this.StateUpdate('completed')}
							>
								<option value="false">No</option>
								<option value="true">Yes</option>
							</select>
						</div>
					</div>
				</div>
			);
		}
	};

	render() {
		return <this.Display />;
	}
}
