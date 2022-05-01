import Movie from '../movie/movie.component';

import './movie-list.styles.scss';

const MovieList = ({movies}) => {
    return (
        <div className="movie-list-container">
            {
                movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                 ))
            }
        </div>
    );
}

export default MovieList;