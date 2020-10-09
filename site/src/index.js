import 'react-app-polyfill/ie11';
import "react-app-polyfill/stable";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { applyPolyfills as headerPolyfill, defineCustomElements as headerCustomElement}  from 's-ds-header/loader';
// import { defineCustomElements as footerCustomElement}  from 's-ds-footer/loader';
// import {SDsHeader,SDsCookie,SDsFooter } from 's-ds-components'
import {SDsHeader,SDsCookie,SDsFooter } from '../../components2/'


ReactDOM.render(<App />, document.getElementById('root'));

// headerPolyfill().then(() => {
//   headerCustomElement();
//   footerCustomElement();
//   // defineCustomElements();
// })

setTimeout( () => {
  customElements.define('my-header', SDsHeader);
},500)
customElements.define('my-footer', SDsFooter);
customElements.define('my-cookie', SDsCookie);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
