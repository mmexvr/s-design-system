import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <s-ds-header></s-ds-header>
      <my-header></my-header>
      <my-footer></my-footer>
      <s-ds-footer></s-ds-footer>
      <my-cookie something-else="dsadas name"> <span>test</span> </my-cookie>
    </div>
  );
}

export default App;
