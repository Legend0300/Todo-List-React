import React from 'react';
import Tweet from './Tweet';
import { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import { MovieContextProvider, MovieContext } from './MovieContext';
import AddMovie from './addMovie';
function App() {  

  return (
    <MovieContextProvider>
    <div className="app">
      <Nav />
      <MovieList />
      <AddMovie />
    </div>
    </MovieContextProvider>
  );
}
export default App;
