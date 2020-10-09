import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <my-header></my-header>
       <my-footer></my-footer>
       <my-cookie cookie-name="cookie name"> <span>test</span> </my-cookie>
    </div>
  );
}

export default App;
