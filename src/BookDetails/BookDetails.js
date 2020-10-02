import React, { Component } from 'react';

//This page should display a single books details when clicked on it should also contain a delete function to remove the book from the list
export default class BookDetails extends Component {
	state = {
		wish: false,
		title: 'TITLE',
		author: 'AUTHOR',
		genere: 'ACTION',
		lent: false,
		completed: false,
	};

	// A general purpose state updater
	StateUpdate = (property) => {
		return (event) => {
			const {
				target: { value },
			} = event;
			this.setState({ [property]: value });
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

	// DeleteHandler is called from the book details section to remove an item from the db
	DeleteHandler = () => {
		alert('delete');
	};

	Display = () => {
		if (this.state.wish) {
			return (
				<div>
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
				<div>
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
						<div id="Lent">
							Lent Out: {this.BoolConversion(this.state.lent)}{' '}
						</div>
						<div id="Completed">
							Completed: {this.BoolConversion(this.state.completed)}{' '}
						</div>
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

	// I prefer a yes or no for user interaction
	BoolConversion = (bool) => {
		if (bool) {
			return 'Yes';
		} else {
			return 'No';
		}
	};

	render() {
		return <this.Display />;
	}
}
