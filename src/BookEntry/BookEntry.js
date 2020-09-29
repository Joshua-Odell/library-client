import React, { Component } from 'react';

//This component should return a form with entry information and take a single prop that determines if the book is entered into the normal or the wish list.
export default class BookEntry extends Component {
	state = {
		wish: false,
		title: '',
		author: '',
		genere: '',
		lent: false,
		completed: false,
	};

	Display = () => {
		console.log(this.state.wish);
		if (this.state.wish) {
			return (
				<form>
					<label htmlFor="Title">Title: </label>
					<input type="text" id="Title" />
					<label htmlFor="Author">Author: </label>
					<input type="text" id="Author" />
					<label htmlFor="Genere">Genere: </label>
					{/* Drop down list of Genere Options */}
					<button type="submit">Submit</button>
				</form>
			);
		} else {
			return (
				<form>
					<label htmlFor="Title">Title: </label>
					<input type="text" id="Title" />
					<label htmlFor="Author">Author: </label>
					<input type="text" id="Author" />
					<label htmlFor="Genere">Genere: </label>
					{/* Drop down list of Genere Options */}
					<label htmlFor="Lent">Lent Out: </label>
					{/* Check Box */}
					<label htmlFor="Completed">Completed: </label>
					{/* Check Box */}
					<button type="submit">Submit</button>
				</form>
			);
		}
	};
	render() {
		return <div>{this.Display}</div>;
	}
}
