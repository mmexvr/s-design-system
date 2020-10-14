import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// NPM package
import {SDsHeader,SDsCookie,SDsFooter } from 's-ds-components/'
// import { defineCustomElements , applyPolyfills } from 's-ds-components/loader'

// Each component is not npm packages
// import {defineCustomElements as headerCustomElement, applyPolyfills} from 's-ds-header/loader'
// import { defineCustomElements as footerCustomElement} from 's-ds-footer/loader'


// Working locally

// import {SDsHeader,SDsCookie,SDsFooter ,} from '../../components2/';
// import { defineCustomElements } from '../../components2/loader';


/* All elements */

// applyPolyfills().then(() => {
//   defineCustomElements();
// })


// applyPolyfills().then(() => {
//   headerCustomElement();
//   footerCustomElement();
// })


// Specific component with its own name space

setTimeout( () => {
  customElements.define('my-header', SDsHeader);
},500)
customElements.define('my-footer', SDsFooter);
customElements.define('my-cookie', SDsCookie);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
