import { Component } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import { IMovie } from './types/movie-types';

interface AppProps {}
interface AppState {
    movies: Array<IMovie>;
}

export class App extends Component<AppProps, AppState> {
    state = {
        movies: localStorage.movies ? JSON.parse(localStorage.movies) : [],
    };

    fetchMovies = async (searchText: string) => {
        const url = 'https://omdbapi.com/?apikey=aa9e49f&s=' + searchText;
        // fetch(url)
        //     .then((resp) => resp.json())
        //     .then((data) => this.setState({ movies: data.Search }));
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({ movies: data.Search });
        localStorage.setItem('movies', JSON.stringify(data.Search));
    };

    render() {
        return (
            <>
                <Header fetchMovies={this.fetchMovies} />
                <div className='container'>
                    <MovieList movies={this.state.movies} />
                </div>
            </>
        );
    }
}

export default App;
