import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './movie.css';

class Movie extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres: PropTypes.array, 
        synopsis: PropTypes.string, 
        torrents: PropTypes.array, 
        year: PropTypes.number,
        alt: PropTypes.string
    }

    render() {
        // console.log(this.props)
        return (
            <div className="Movie">
                <div className="Movie__Column">
                    <MoviePoster poster={this.props.poster} alt={this.props.title}/>
                </div>
                <div className="Movie__Column">
                    <h1>{this.props.title} ({this.props.year})</h1>
                    <div className="Movie__Genres">
                        {this.props.genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                    </div>
                    <div className="Movie__Synopsis">
                        {/* {this.props.synopsis} */}
                        <LinesEllipsis
                        text={this.props.synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        />   
                    </div>
                    <p className="Movie__Torrents">
                        {this.props.torrents.map((torrent, index) => <MovieTorrent torrent={torrent} key={index} />)}
                    </p>
                </div>
            </div>
        )
    }
}

class MovieTorrent extends Component {
    static propTypes = {
        torrent: PropTypes.object
    }

    render() {
        // if (this.props.torrent) {
            return (
                <a  href={this.props.torrent.url} className="Movie__Torrent">{this.props.torrent.url}</a>
            )
        // }
    }
}

class MovieGenre extends Component {
    static propTypes = {
        genre: PropTypes.string.isRequired
    }

    render() {
        return (
            <span className="Movie__Genre">{this.props.genre}</span>
        )
    }
}

class MoviePoster extends Component {
    static propTypes = {
        poster: PropTypes.string.isRequired,
        alt: PropTypes.string
    }
    render() {
        return (
            <img src={this.props.poster} className="Movie__Poster" alt={this.props.alt} title={this.props.alt}/>
        )   
    }
}

// it is stateless functional for dumb component.
// to return something without function, component lifecycle
// function Movie (title, poster) {
//     return (
        //     <div>
        //     <MoviePoster poster={poster}/>
        //     <h1 className="Movie">{title}</h1>
        // </div>
//     )
// }
// Movie.propTypes  = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
// }

export default Movie;