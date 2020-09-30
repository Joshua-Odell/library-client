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

	Display = () => {
		if (this.state.wish) {
			return (
				<div>
					<div id="Title">Title: {this.state.title} </div>
					<div id="Author">Author: {this.state.author} </div>
					<div id="Genere">Genere: {this.state.genere} </div>
				</div>
			);
		} else {
			return (
				<div>
					<div id="Title">Title: {this.state.title} </div>
					<div id="Author">Author: {this.state.author} </div>
					<div id="Genere">Genere: {this.state.genere} </div>
					<div id="Lent">Lent Out: {this.BoolConversion(this.state.lent)} </div>
					<div id="Completed">
						Completed: {this.BoolConversion(this.state.completed)}{' '}
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
