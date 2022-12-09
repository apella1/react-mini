import React from 'react';
import './App.css';
import { Reducer, State } from './components';
import { Context } from './hooks';

function App() {
  return (
    <div className="App">
      <Context />
      <State />
      <Reducer />
    </div>
  );
}

export default App;