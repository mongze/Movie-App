import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';


class App extends Component {
    state = {
    }

    componentWillMount() {
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                movies: [
                    {
                        title: "Coco",
                        poster: "https://vignette.wikia.nocookie.net/disney/images/6/62/Coco_Vive_Tu_Momento_Poster.jpg/revision/latest?cb=20171016153046&format=original"
                    },
                    {
                        title: "Big fish",
                        poster: "https://pics.filmaffinity.com/big_fish-838287233-large.jpg"
                    },
                    {
                        title: "Her",
                        poster: "http://www.trespassmag.com/wp-content/uploads/2014/01/HER-A4poster.jpg"
                    },
                    {
                        title: "Zootopia",
                        poster: "https://images-na.ssl-images-amazon.com/images/I/71-Fj-WsM7L._SY550_.jpg"
                    },
                    {
                        title: "Alice",
                        poster: "https://images-na.ssl-images-amazon.com/images/I/71-Fj-WsM7L._SY550_.jpg"
                    }
                ]
            })
        }, 3000);
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />
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
