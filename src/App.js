import React from 'react';
import Tweet from './Tweet';
import { useState } from 'react';
import './App.css';

function App() {  

  return (
    <div className="app">
      <Tweet name="John" message="Hello there" likes="30"/>
      div
      <Tweet name="Jane" message="Hello there" likes="30"/>
      <div>
        hello
      </div>
    </div>
  );
}
export default App;
