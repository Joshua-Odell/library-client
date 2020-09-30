import React, { Component } from 'react';

//This component should return a form with entry information and take a single prop that determines if the book is entered into the normal or the wish list.
export default class BookEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wish: this.props.wish,
			title: '',
			author: '',
			genere: '',
			lent: false,
			completed: false,
		};
	}

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

	HandleSubmit = (event) => {
		event.preventDefault();
		this.ConversionToBool('lent');
		this.ConversionToBool('completed');
		// will make a fetch POST request to the server
	};

	Display = () => {
		if (this.state.wish) {
			return (
				<form>
					<div>
						<label htmlFor="Title">Title: </label>
						<input
							type="text"
							id="Title"
							onChange={this.StateUpdate('title')}
						/>
					</div>
					<div>
						<label htmlFor="Author">Author: </label>
						<input
							type="text"
							id="Author"
							onChange={this.StateUpdate('author')}
						/>
					</div>
					<div>
						<label htmlFor="Genere">Genere: </label>
						<select
							id="Genere"
							name="Genere"
							onChange={this.StateUpdate('genere')}
						>
							<option value="---">---</option>
							<option value="Mystery">Mystery</option>
							<option value="Biography">Biography</option>
							<option value="Non-Fiction">Non-Fiction</option>
							<option value="Reference">Reference</option>
							<option value="Fiction">Fiction</option>
							<option value="Textbook">Textbook</option>
							<option value="Political">Political</option>
						</select>
					</div>
					<button class="button" type="submit" onClick={this.HandleSubmit}>
						Submit
					</button>
				</form>
			);
		} else {
			return (
				<form>
					<div>
						<label htmlFor="Title">Title: </label>
						<input
							type="text"
							id="Title"
							onChange={this.StateUpdate('title')}
						/>
					</div>
					<div>
						<label htmlFor="Author">Author: </label>
						<input
							type="text"
							id="Author"
							onChange={this.StateUpdate('author')}
						/>
					</div>
					<div>
						<label htmlFor="Genere">Genere: </label>
						<select
							id="Genere"
							name="Genere"
							onChange={this.StateUpdate('genere')}
						>
							<option value="---">---</option>
							<option value="Mystery">Mystery</option>
							<option value="Biography">Biography</option>
							<option value="Non-Fiction">Non-Fiction</option>
							<option value="Reference">Reference</option>
							<option value="Fiction">Fiction</option>
							<option value="Textbook">Textbook</option>
							<option value="Political">Political</option>
						</select>
					</div>
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
					<button class="button" type="submit" onClick={this.HandleSubmit}>
						Submit
					</button>
				</form>
			);
		}
	};

	render() {
		return <this.Display />;
	}
}
