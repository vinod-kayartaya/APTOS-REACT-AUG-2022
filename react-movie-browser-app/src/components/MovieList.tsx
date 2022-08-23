import { Component } from 'react';
import MovieCard from './MovieCard';

interface MovieListProps {
    movies: Array<any>;
}

export class MovieList extends Component<MovieListProps> {
    render() {
        const { movies } = this.props;

        const moviesJsx = movies.map((m) => (
            <div className='col-3' key={m.imdbID}>
                <MovieCard movie={m} />
            </div>
        ));

        return (
            <>
                {movies && movies.length === 0 && (
                    <h3 className='text-center'>
                        No movies to display. Try search for some.
                    </h3>
                )}

                <div className='row'>{moviesJsx}</div>
            </>
        );
    }
}

export default MovieList;
