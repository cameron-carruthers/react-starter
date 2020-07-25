import React from 'react';
import MovieListEntry from './MovieListEntry.js';

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => {
        return (
          <MovieListEntry movie={movie.title} />
        )
      })}
    </div>
  )
}

export default MovieList;