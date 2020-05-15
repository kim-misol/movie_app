import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
// import Navigation from './Navigation';

const BASE_URL = "https://yts.mx/api/v2/";
// const LIST_MOVIES_URL = `${BASE_URL}list_movies.json?sort_by=year`;
// const LIST_MOVIES_URL = `${BASE_URL}list_movies.json?sort_by=rating&limit=50`;
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json?sort_by=download_count&limit=50`;

class App extends Component {
  state = {}

  componentDidMount() {
    this._getMovies()
  }

  _renderMovies = () => {
    // not usually use index in here because it can make slow
    // const movies = this.state.movies.map((movie, index) => {
    const movies = this.state.movies.map((movie) => {
      // console.log(movie)
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id}
        genres={movie.genres} 
        torrents={movie.torrents} 
        synopsis={movie.synopsis} 
        year={movie.year} 
      />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()  
    this.setState({
      movies
    }) 
  }

  _callApi = () => {
    return fetch(LIST_MOVIES_URL)
    .then(response => response.json())
    .then(res => res.data.movies)
    .catch(err => console.log(err))
  }

  render () {
    const { movies } = this.state;
    return (

      <div className={movies ? "App" : "App--loading"}>
        {/* if have movies, then call _renderMovies(). else, print Loading */}
        {movies ? this._renderMovies() : 'Loading..'}
      </div>
    );
  }
}

export default App;

/**
 * Componenet's LifeCycle
 * Render: componentWillMount() => render() => componenetDidMount()
 * Update: componentwillReceiveProps() => shouldComponentUpdate = > componentWillUpdate() => render() => component
 */