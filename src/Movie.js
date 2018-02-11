import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// dumb component: has not state, render function, will mount, did mount
function Movie({title,poster,genres,rating,synopsis}) {
    return (
        <section className="movie_item">
            <span className="image_area">
                <MoviePoster poster={poster} alt={title} />
            </span>
            <div className="text_area">
                <h3 className="movie_title">{ title }</h3>
                <div className="genres">
                    {genres.map((genre, index) => <MovieGenres genres={genre} key={index}/>)}
                </div>
                <em className="rating">{rating}</em>
                <p className="synopsis">{synopsis}</p>
            </div>
        </section>
    )
}

function MoviePoster({poster,alt}) {
    return (
        <img src={poster} width="200" height="300" alt={alt} title={alt} className="movie_poster"/>
    )
}

function MovieGenres({genres}) {
    return (
        <span className="genre_name ">{genres}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

MovieGenres.propTypes = {
    genres: PropTypes.array.isRequired
}

export default Movie;
