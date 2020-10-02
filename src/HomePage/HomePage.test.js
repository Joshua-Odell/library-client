import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import ListConverter from './HomePage';
import AddButton from './HomePage';

describe('HomePage tests', () => {
	it('S HomePage', () => {
		const div = document.createElement('div');
		ReactDOM.render(<HomePage />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S ListConverter', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ListConverter />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S AddButton', () => {
		const div = document.createElement('div');
		ReactDOM.render(<AddButton />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
