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

	// runs BookFetcher on load to populate the fields with both the library(no prop) and wish list(true as a prop)
	componentWillMount() {
		this.BookFetcher();
		this.BookFetcher(true);
	}

	// This function is designed to fetch all books from both the library and wish list.
	// It must be called twice once with no value and the second time with a true value to work for both lists.
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

	// This function takes the format returned by fetch and turns it into a list of objects to be easily read by the ListConverter function.
	BookProcesser = (list, property) => {
		let result = [];
		list.map((item) => {
			result.push({ title: item.title, author: item.author, id: item.id });
		});
		this.setState({ [property]: result });
	};

	// This takes the returned fetchGet request list and converts it to a li format
	// includes a link to the bookDetails page with two versions depending on if it is a regular library item or a wish list item
	ListConverter = (list, bool) => {
		if (!list.length) {
			return 'There are no books in your library';
		}
		let newLocationString;
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
						<a href={newLocation} rel="noopener noreferrer">
							{item.title}
						</a>
						, By: {item.author}
					</p>
				</li>
			);
		});
		return <ul>{listItems}</ul>;
	};

	// Redirects to /newbook and calls BookEntry with a boolean prop depending on if
	// the item is from the regular library or the wish list
	AddButton = (wish) => {
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
			<div htmlFor="HomePage" className="homePage">
				<div className="primaryContent">
					<div htmlFor="LibraryList">
						<div htmlFor="LibraryListHeader" className="container">
							<h2 className="item">Books in your Library</h2>
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
				<div className="instructions">
					<h3>Welcome to My Library</h3>
					<p>
						My Library is a library tracking application that allows you to not
						only keep track of the books in your library but also a wish list of
						books. <br /> By clicking on a book you will see more details about
						that book You can also quickly track if you let a friend borrow your
						books through the lent drop down feature. Similarly you can also see
						what books you have finished. <br /> Avid readers can quickly loose
						track of individual books in their vast library. This application
						makes keeping track of and building a personal library very easy.
						From a purely practical perspective having an off site index of your
						library is extremley helpful for insurance purpouses. Who could be
						expected to remember every one of thier books in a tragic
						circumstance.
					</p>
				</div>
			</div>
		);
	}
}
