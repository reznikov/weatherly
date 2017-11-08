import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {App} from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HashRouter><App/></HashRouter>, div);
});
