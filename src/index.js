import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Cactus from './Cactus';
import Leafy from './Leafy';
import Ampelous from './Ampelous';
import * as serviceWorker from './serviceWorker';

// jsx- синтаксис
ReactDOM.render(<Cactus/>, document.getElementById('root'));
ReactDOM.render(<Leafy/>, document.getElementById('root1'));
ReactDOM.render(<Ampelous/>, document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
