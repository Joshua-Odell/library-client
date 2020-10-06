import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import BookDetails from './BookDetails/BookDetails';
import BookEntry from './BookEntry/BookEntry';
import './App.css';

// TODO:
// Make My Library grow
// Add in auth0 authentication

function App() {
	let homePageLocation = 'http://localhost:3000/';
	return (
		<div>
			<nav className="container--center">
				<a href={homePageLocation}>
					<h1 className="item">My Library</h1>
				</a>
				{/* <button className="item button" type="button">
					Log In
				</button> */}
			</nav>
			<hr />
			<main className="App">
				<Route path="/" exact component={HomePage} />
				<Route path="/book/:id" component={BookDetails} />
				<Route path="/newbook/library">
					<BookEntry wish="false" />
				</Route>
				<Route path="/newbook/wishlist">
					<BookEntry wish="true" />
				</Route>
			</main>
		</div>
	);
}

export default App;
