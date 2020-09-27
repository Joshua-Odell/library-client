import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import BookDetails from './BookDetails/BookDetails';
import BookEntry from './BookEntry/BookEntry';

function App() {
	return (
		<main className="App">
			<Route path="/" exact component={HomePage} />
			<Route path="/book/:id" component={BookDetails} />
			<Route path="/newbook" component={BookEntry} />
		</main>
	);
}

export default App;
