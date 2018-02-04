import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
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
    }
]

class App extends Component {
    state = {
        greeting: "hello"
    }

    componentWillMount() {
        console.log("WillMount");
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                greeting: 'hello again!'
            })
        },5000)
    }

    render() {
        console.log("render");
        return (
            <div className="App">
                {this.state.greeting}
                {movies.map((movie, index) => {
                    return <Movie title={movie.title} poster={movie.poster} key={index} />
                })}
            </div>
        );
    }
}

export default App;
