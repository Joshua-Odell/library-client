import React, { Component } from 'react';
import BookEntry from '../BookEntry/BookEntry';

export default class HomePage extends Component {
	state = {
		libraryList: [
			{ title: 'A test of titles', author: 'Testy Mctest Test', id: 1 },
		],
		libraryWishList: [],
	};

	// This takes the returned fetchGet request list and converts it to a li format
	// TODO:
	// Redirect to /book/:id page when clicked on
	// change the title to grow when hovered over to indicate that it is a link and change the pointer on hover
	ListConverter = (list) => {
		if (!list.length) {
			return 'There are no books in your library';
		}
		const listItems = list.map((item) => {
			return (
				<li>
					<a href="">{item.title}</a>, By: {item.author}
				</li>
			);
		});
		return <ul>{listItems}</ul>;
	};

	AddButton = (wish) => {
		// Redirects to /newbook and calls BookEntry with a boolean prop depending on if
		// the item is from the regular library or the wish list
	};

	render() {
		return (
			<div htmlFor="HomePage">
				<div htmlFor="LibraryList">
					<div htmlFor="LibraryListHeader" className="container">
						<h2 className="item">Books in your library</h2>
						<button
							className="item button"
							type="button"
							onClick={this.AddButton(false)}
						>
							+
						</button>
					</div>
					<hr />
					<div htmlFor="LibraryListItems" className="content">
						{this.ListConverter(this.state.libraryList)}
					</div>
				</div>
				<div htmlFor="WishList">
					<div htmlFor="WishListHeader" className="container">
						<h2 className="item">Books in your Wish List</h2>
						<button
							type="button"
							className="item button"
							onClick={this.AddButton(true)}
						>
							+
						</button>
					</div>
					<hr />
					<div htmlFor="WishListItems" className="content">
						{this.ListConverter(this.state.libraryWishList)}
					</div>
				</div>
			</div>
		);
	}
}
