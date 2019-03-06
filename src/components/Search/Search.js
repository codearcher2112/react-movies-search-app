import React from 'react';
import PropTypes from 'prop-types';

const Search = props => (
  <form className="search" onInput={e => props.onInput(e.target.value)}>
    <input className="search__input" type="text" placeholder={props.placeholder} />
  </form>
);

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default Search;
