import React from 'react';
import PropTypes from 'prop-types';

const Movie = props => (
<div className="card shadow-lg mb-4">
  <img className="card-img-top" alt={props.title} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="badge badge-pill badge-warning mr-2">Release date - {props.release_date}</p>
    <p className="badge badge-pill badge-success">Average vote - {props.vote_average}</p>
    <p className="card-text">{props.overview}</p>
    <button href="#" className="btn btn-primary">Go somewhere</button>
  </div>
</div>
);

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string
};

export default Movie;
