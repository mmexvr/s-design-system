import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <my-header></my-header>
      <my-cookie cookie-name="imported cookie message"> </my-cookie>
      <my-footer></my-footer>

      <s-ds-header></s-ds-header>
      <s-ds-cookie cookie-name="imported cookie message"></s-ds-cookie>
      <s-ds-footer></s-ds-footer>
    </div>
  );
}

export default App;
