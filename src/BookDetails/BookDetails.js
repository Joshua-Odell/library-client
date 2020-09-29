import React, { Component } from 'react';

//This page should display a single books details when clicked on it should also contain a delete function to remove the book from the list
export default class BookDetails extends Component {
	state = {
		wish: false,
		title: '',
		author: '',
		genere: '',
		lent: false,
		completed: false,
	};

	Display = () => {
		if (this.state.wish) {
			return (
				<div>
					<div id="Title">Title: </div>
					<div id="Author">Author: </div>
					<div id="Genere">Genere: </div>
				</div>
			);
		} else {
			return (
				<div>
					<div id="Title">Title: </div>
					<div id="Author">Author: </div>
					<div id="Genere">Genere: </div>
					<div id="Lent">Lent Out: </div>
					<div id="Completed">Completed: </div>
				</div>
			);
		}
	};
	render() {
		return <div>{this.Display}</div>;
	}
}
