import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// NPM package
 
// Working locally

// import {SDsHeader,SDsCookie,SDsFooter ,} from '../../components2/';
import { applyPolyfills , defineCustomElements} from '../../components2/loader/';


/* All elements */

applyPolyfills().then(() => {
  defineCustomElements();
})


// applyPolyfills().then(() => {
//   headerCustomElement();
//   footerCustomElement();
// })


// Specific component with its own name space

// applyPolyfills().then(() => {
//   setTimeout( () => {
//     customElements.define('my-header', SDsHeader);
//   },500)
//   customElements.define('my-footer', SDsFooter);
//   customElements.define('my-cookie', SDsCookie);
// })


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
