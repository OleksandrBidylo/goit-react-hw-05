import { useEffect, useMemo, useState } from "react";
import { searchMovies } from "../../services/Api";
import { useLocation, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import s from "./MoviesPage.module.css";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const getAllMovies = async () => {
      setIsLoading(true);
      try {
        const data = await searchMovies(query);
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      getAllMovies();
    }
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: newQuery });
  };

  const filtredData = useMemo(
    () =>
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      ),
    [movies, query]
  );

  return (
    <div className={s.wrapper}>
      <SearchBar handleChangeQuery={handleChangeQuery} />

      {isLoading ? (
        <Loader />
      ) : (
        <MovieList movies={filtredData} location={location} />
      )}
    </div>
  );
};

export default MoviesPage;
