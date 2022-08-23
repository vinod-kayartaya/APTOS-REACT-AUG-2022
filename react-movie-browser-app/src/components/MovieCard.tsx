import { Component } from 'react';
import { IMovie } from '../types/movie-types';

interface MovieCardProps {
    movie: IMovie;
}

export class MovieCard extends Component<MovieCardProps> {
    render() {
        let { movie } = this.props;

        return (
            <>
                <div className='card'>
                    <img
                        style={{
                            height: '400px',
                            objectFit: 'cover',
                        }}
                        src={movie.Poster}
                        alt={movie.Title}
                        className='card-img-top'
                    />
                    <div className='card-body'>
                        <h5 className='cart-title'>{movie.Title}</h5>
                        <p className='card-text'>
                            {movie.Year} - {movie.Type}
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default MovieCard;
