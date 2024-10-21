import { Link } from "react-router-dom";

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <p>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
