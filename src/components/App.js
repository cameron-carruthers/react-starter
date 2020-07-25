import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedMovies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
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
        <Search onChange={this.selectMovies}/>
      </nav>
      <main>
        <MovieList movies={this.state.selectedMovies}/>
      </main>
    </div>
  )}
}

export default App;
