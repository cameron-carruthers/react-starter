import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedMovies: [],
      allMovies: []
    }

    this.selectMovies = this.selectMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  selectMovies(movies) {
    this.setState({
      selectedMovies: movies
    });
  }

  addMovie(movie) {
    let movies = [...this.state.allMovies, movie];
    this.setState({
      allMovies: movies,
      selectedMovies: movies
    });
  }

  render(){
    return(
    <div>
      <nav>
        <h1>Movie<span className="primary-color">List</span></h1>
        <div className="container">
          <AddMovie onSubmit={this.addMovie}/>
          <Search onChange={this.selectMovies} allMovies={this.state.allMovies}/>
        </div>
      </nav>
      <main>
        <MovieList movies={this.state.selectedMovies}/>
      </main>
    </div>
  )}
}

export default App;
