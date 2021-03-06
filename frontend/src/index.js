import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faSearch } from '@fortawesome/free-solid-svg-icons'

import App from './App';
import * as serviceWorker from './serviceWorker';

library.add(faCheckSquare, faSearch);

ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();