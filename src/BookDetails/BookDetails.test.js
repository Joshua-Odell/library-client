import React from 'react';
import ReactDOM from 'react-dom';
import BookDetails from './BookDetails';
import StateUpdate from './BookDetails';
import ConversionToBool from './BookDetails';
import BoolConversion from './BookDetails';
import DeleteHandler from './BookDetails';
import Display from './BookDetails';
import BookFetcher from './BookDetails';
import FetchedStateSetter from './BookDetails';
import BookUpdater from './BookDetails';

describe('BookDetails test', () => {
	it('S BookDetails', () => {
		const div = document.createElement('div');
		ReactDOM.render(<BookDetails />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S BookFetcher', () => {
		const div = document.createElement('div');
		ReactDOM.render(<BookFetcher />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S FetchedStateSetter', () => {
		const div = document.createElement('div');
		ReactDOM.render(<FetchedStateSetter />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S BookUpdater', () => {
		const div = document.createElement('div');
		ReactDOM.render(<BookUpdater />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S StateUpdate', () => {
		const div = document.createElement('div');
		ReactDOM.render(<StateUpdate />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S ConversionToBool', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ConversionToBool />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S BoolConversion', () => {
		const div = document.createElement('div');
		ReactDOM.render(<BoolConversion />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S DeleteHandler', () => {
		const div = document.createElement('div');
		ReactDOM.render(<DeleteHandler />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S Display', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Display />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
