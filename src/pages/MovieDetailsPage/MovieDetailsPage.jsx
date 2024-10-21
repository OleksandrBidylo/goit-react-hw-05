import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getImageUrl, getMovieDetails } from "../../services/Api";
import Loader from "../../components/Loader/Loader";
import s from "./MovieDetails.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);
  if (!movie) return <Loader />;

  return (
    <div className={s.wrapper}>
      <div className={s.gback}>
        <Link to={goBackRef.current ?? "/movies"}>← Go back</Link>
      </div>
      <div className={s.filmPreview}>
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          width={280}
          height={450}
        />
        <div className={s.filmText}>
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>Rating: {movie.vote_average.toFixed(1)}</p>
          <div className={s.overview}>
            <p>Overview</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>

      <div className={s.buttons}>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>

      <hr />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
