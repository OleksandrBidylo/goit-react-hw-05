import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/Api";
import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getAllMovies = async () => {
      const data = await getTrendingMovies();
      setMovies(data);
    };
    getAllMovies();
  }, []);
  return (
    <div className={s.wrapper}>
      <h2>Trending movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
