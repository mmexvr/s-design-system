import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <my-header></my-header>
       <my-footer></my-footer>
       <my-cookie cookieName="dsds"> <span>test</span> </my-cookie>
    </div>
  );
}

export default App;
