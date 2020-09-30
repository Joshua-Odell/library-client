import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import BookDetails from './BookDetails/BookDetails';
import BookEntry from './BookEntry/BookEntry';
import './App.css';

// TODO:
// Make the My Library Icon a link to the homepage
// Add in auth0 authentication

function App() {
	return (
		<body>
			<nav className="container">
				<h1 className="item">My Library</h1>
				<button className="item button" type="button">
					Log In
				</button>
			</nav>
			<hr />
			<main className="App">
				<Route path="/" exact component={HomePage} />
				<Route path="/book/:id" component={BookDetails} />
				<Route path="/newbook" component={BookEntry} />
			</main>
		</body>
	);
}

export default App;
