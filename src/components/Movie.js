// import React, { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres
          }
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          {/* {console.log(genres)}
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul> */}
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

// class MovieGenre extends Component {
//   static propTypes = {
//       genre: PropTypes.string.isRequired
//   }

//   render() {
//       return (
//           <li className="Movie__Genre">{this.props.genre}</li>
//       )
//   }
// }

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  // genres: PropTypes.array
  // genres: PropTypes.arrayOf(PropTypes.string).isRequired
  genres: PropTypes.arrayOf(PropTypes.string)
};

export default Movie;
