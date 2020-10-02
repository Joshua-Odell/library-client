import React from 'react';
import ReactDOM from 'react-dom';
import BookEntry from './BookEntry';
import StateUpdate from './BookEntry';
import ConversionToBool from './BookEntry';
import HandleSubmit from './BookEntry';
import Display from './BookEntry';

describe('BookEntry tests', () => {
	it('S BookEntry', () => {
		const div = document.createElement('div');
		ReactDOM.render(<BookEntry />, div);
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
	it('S HandleSubmit', () => {
		const div = document.createElement('div');
		ReactDOM.render(<HandleSubmit />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S Display', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Display />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
