import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

/**
 * Componenet's LifeCycle
 * Render: componentWillMount() => render() => componenetDidMount()
 * Update: componentwillReceiveProps() => shouldComponentUpdate = > componentWillUpdate() => render() => component
 */

class App extends Component {
  state = {
    loading: 'Loading...'
    , movies: [] 
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Parasite"
            , poster: "https://lh3.googleusercontent.com/proxy/ig-y88agKs6yxckWqH-1Z5Gy4bVzFSH-tmJdYnLLYvGtTiohJqAQw6u3F21GPWILLuI33DMGo49gAhW_Ev46RmWawVm-vdzc7ZWAdyESoWGSAtvpKBSdQZyv0o6EegXQcDTQlxjmoFwcfvu8aFUL6z6cQBLs7bvW-jQ"
          },
          {
            title: "Matrix"
            , poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
          },
          {
            title: "Full Matal Jacket"
            , poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
          },
          {
            title: "Oldboy"
            , poster: "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
          },
          {
            title: "Star Wars"
            , poster: "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372"
          }
        ]
      })
    }, 3000)

    setTimeout(() => {
      this.setState({
        movies: [
          // add one more movie before displaying the existed movie list
          {
            title: "The Pursuit of Happyness"
            ,poster: "https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg"
          }
          , ...this.state.movies
        ]
      })
    }, 6000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }
  render () {
    return (
      <div className="App">
        {/* if have movies, then call _renderMovies(). else, print Loading */}
        {this.state.movies.length > 0 ? this._renderMovies() : this.state.loading}
      </div>
    );
  }
}

export default App;