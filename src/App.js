import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';


class App extends Component {
    state = {}

    componentWillMount() {
    }

    componentDidMount() {
        this._getMovies()
    }

    _getMovies = async () => {
        const movies = await this._callApi(); // await은 성공적인 수행이 끝나길 기다리는게 아니라 그냥 작동 수행을 끝나길 기다림
        this.setState({
            movies: movies
        })
     }

    _callApi = () => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
            .then(potato => potato.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err) )
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie) => {
            return <Movie
                title={movie.title}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                rating={movie.rating}
                synopsis={movie.synopsis}
                key={movie.id}
            />
        });
        return movies;
    }

    render() {
        return (
            <div className="App">
                { this.state.movies ? this._renderMovies() : 'Loading' }
            </div>
        );
    }
}

export default App;
