import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedMovies: []
    }

    this.selectMovies = this.selectMovies.bind(this);
  }

  selectMovies(movies) {
    this.setState({
      selectedMovies: movies
    });
  }

  render(){
    return(
    <div>
      <nav>
        <h1>Movie<span className="primary-color">List</span></h1>
        <div className="container">
          <AddMovie />
          <Search onChange={this.selectMovies}/>
        </div>
      </nav>
      <main>
        <MovieList movies={this.state.selectedMovies}/>
      </main>
    </div>
  )}
}

export default App;
