import './movie.styles.scss';

const Movie = ({ movie: { title, genre, year } }) => {
    return (
        <div className="movie-container">
            <h2>{title}</h2>
            <p>{genre}</p>
            <span>{year}</span>
        </div>
    );
}

export default Movie;