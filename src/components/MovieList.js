import React from 'react';
import MovieListEntry from './MovieListEntry.js';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const MovieList = (props) => (
  <div>
    {movies.map((movie) => {
      return (
        <MovieListEntry movie={movie.title} />
      )
    })}
  </div>
);

export default MovieList;