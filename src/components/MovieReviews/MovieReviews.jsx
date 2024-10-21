import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/Api";
import s from "./Reviews.module.css";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getMovieReviews(movieId);
      setReviews(data);
    };
    getData();
  }, [movieId]);
  if (!reviews.length) {
    return <h2>There are no reviews yet!</h2>;
  }

  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p className={s.author}>Author:{review.author}</p>
            <p>{review.content}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
