import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/Api";

import s from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

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
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
