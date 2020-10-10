import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import config from '../config';

export default class HomePage extends Component {
	state = {
		redirect: null,
		libraryList: [
			{ title: 'A test of titles', author: 'Testy Mctest Test', id: 1 },
			{
				title: 'The Legend of Sleepy Hollow',
				author: 'Washington Irving',
				id: 2,
			},
		],
		libraryWishList: [],
	};

	// runs two versions

	componentWillMount() {
		this.BookFetcher();
		this.BookFetcher(true);
	}

	// This function is designed to fetch all books from both the library and wish list.
	// It must be called twice once with no value and the second time with a true value to work for both lists.
	// TODO:
	// This does not seem to be making a network request so it just overwites the list with an empty array
	BookFetcher = (wish = false) => {
		let extension = '';
		let property = '';
		if (wish) {
			extension = '/wish';
			property = 'libraryWishList';
		} else {
			extension = '/library';
			property = 'libraryList';
		}
		fetch(config.API_ENDPOINT + extension, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				'access-control-allow-origin': '*',
			},
		})
			.then((res) => res.json())
			.then((list) => {
				this.BookProcesser(list, property);
			});
	};

	// This function takes the format returned by fetch and turns it into a list of objects to be easily read by the List Converter function.
	BookProcesser = (list, property) => {
		let result = [];
		list.map((item) => {
			result.push({ title: item.title, author: item.author, id: item.id });
		});
		this.setState({ [property]: result });
	};

	// This takes the returned fetchGet request list and converts it to a li format
	// TODO:Fi
	// change the title to grow when hovered over to indicate that it is a link and change the pointer on hover
	ListConverter = (list, bool) => {
		if (!list.length) {
			return 'There are no books in your library';
		}
		if (!bool) {
			newLocationString = `https://library-client.vercel.app/book/`;
		} else {
			newLocationString = `https://library-client.vercel.app/wish/`;
		}
		const listItems = list.map((item) => {
			let newLocation = newLocationString + item.id;
			return (
				<li key={item.id}>
					<p>
						<a href={newLocation} target="_blank" rel="noopener noreferrer">
							{item.title}
						</a>
						, By: {item.author}
					</p>
				</li>
			);
		});
		return <ul>{listItems}</ul>;
	};

	AddButton = (wish) => {
		// Redirects to /newbook and calls BookEntry with a boolean prop depending on if
		// the item is from the regular library or the wish list
		if (!wish) {
			this.setState({ redirect: `/newbook/library` });
		} else {
			this.setState({ redirect: `/newbook/wishlist` });
		}
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}
		return (
			<div htmlFor="HomePage">
				<div htmlFor="LibraryList">
					<div htmlFor="LibraryListHeader" className="container">
						<h2 className="item">Books in your library</h2>
						<button
							className="item button"
							type="button"
							onClick={this.AddButton.bind(this, false)}
						>
							+
						</button>
					</div>
					<hr />
					<div htmlFor="LibraryListItems" className="content">
						{this.ListConverter(this.state.libraryList, false)}
					</div>
				</div>
				<div htmlFor="WishList">
					<div htmlFor="WishListHeader" className="container">
						<h2 className="item">Books in your Wish List</h2>
						<button
							type="button"
							className="item button"
							onClick={this.AddButton.bind(this, true)}
						>
							+
						</button>
					</div>
					<hr />
					<div htmlFor="WishListItems" className="content">
						{this.ListConverter(this.state.libraryWishList, true)}
					</div>
				</div>
			</div>
		);
	}
}
