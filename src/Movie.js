import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// dumb component: has not state, render function, will mount, did mount
function Movie({title,poster}) {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{ title }</h1>
        </div>
    )
}

function MoviePoster({poster}) {
    return (
        <img src={poster} width="200" height="300" alt=""/>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;
