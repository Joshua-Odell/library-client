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
	let homePageLocation = 'https://library-client.vercel.app/';
	return (
		<div>
			<header className="container--center ">
				<a href={homePageLocation}>
					<h1 className="item emphasize">My Library</h1>
				</a>
			</header>
			<main className="App">
				<Route path="/" exact component={HomePage} />
				<Route path="/book/:id" component={BookDetails} />
				<Route path="/wish/:id" component={BookDetails} />
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
