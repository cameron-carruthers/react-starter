import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';

class App extends React.Component {
  render(){
    return(
    <div>
      <nav>
        <h1>Movie<span className="primary-color">List</span></h1>
        <Search />
      </nav>
      <main>
        <MovieList />
      </main>
    </div>
  )}
}

export default App;
