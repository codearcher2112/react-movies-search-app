import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';

const Movies = props => (
  <ul className="movies card-columns">
    {props.movies.map(movie => (
      <li key={movie.id}>
        <Movie {...movie} />
      </li>
    ))}
  </ul>
);

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};

export default Movies;
