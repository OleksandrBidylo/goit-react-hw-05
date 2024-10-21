import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImageUrl, getMovieCredits } from "../../services/Api";
import s from "./Cast.module.css";
const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getMovieCredits(movieId);
      setCast(data);
    };
    getData();
  }, [movieId]);
  if (!cast.length) {
    return <h2>There are no reviews yet!</h2>;
  }

  const handleImageError = (e) => {
    e.target.style.backgroundColor = "gray";
    e.target.style.width = "100px";
    e.target.style.height = "150px";
  };

  return (
    <div>
      <ul className={s.list}>
        {cast.map((actor) => (
          <li className={s.cast} key={actor.id}>
            <img
              src={getImageUrl(actor.profile_path)}
              width={100}
              onError={handleImageError}
            />
            <div className={s.text}>
              <p className={s.name}>{actor.name}</p>
              <p>{actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
