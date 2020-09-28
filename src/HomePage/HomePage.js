import React, { Component } from 'react';

export default class HomePage extends Component {
	state = {
		libraryList: [
			{ title: 'A test of titles', author: 'Testy Mctest Test', id: 1 },
		],
		libraryWishList: [],
	};

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

	render() {
		return (
			<div htmlFor="HomePage">
				<div htmlFor="LibraryList">
					<div htmlFor="LibraryListHeader">
						<h2>Books in your library</h2>
						<button type="button">+</button>
					</div>
					<div htmlFor="LibraryListItems">
						{this.ListConverter(this.state.libraryList)}
					</div>
				</div>
				<div htmlFor="WishList">
					<div htmlFor="WishListHeader">
						<h2>Books in your Wish List</h2>
						<button type="button">+</button>
					</div>
					<div htmlFor="WishListItems">
						{this.ListConverter(this.state.libraryWishList)}
					</div>
				</div>
			</div>
		);
	}
}
