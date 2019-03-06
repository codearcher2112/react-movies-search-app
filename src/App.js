import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies/Movies';
import Search from './components/Search/Search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      query: ''
    }

    this.onInput = this.onInput.bind(this);
  }

  onInput(query) {
    this.setState({ query });
    this.searchMovie(query);
  }

  getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results
        })
      });
  }

  searchMovie = (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;

    query ? (
      fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results
        })
      })
    ) : (this.getPopularMovies());

    
  }

  componentDidMount() {
    this.getPopularMovies();
  }

  render() {
    const { movies, query } = this.state;
    const isSearched = query => item => !query || item.title.toLowerCase().includes(query.toLowerCase());
    // console.log(isSearched);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Movies Search React App</h1>
        </header>
        <div className="container">
          <div className="row">
            <Search query={query} onInput={this.onInput} placeholder="Search for Movie" />
          </div>
          <div className="row">
            <Movies movies={movies.filter(isSearched(query))} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
