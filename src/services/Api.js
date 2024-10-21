import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTZjZGFmN2M3N2M3N2E2YWM3N2VjODZiNWU4MzA1ZiIsIm5iZiI6MTcyOTQwMDA3OS4zOTYxMjMsInN1YiI6IjY3MTQ4ODJmOTlmMjJmMzI2YWFkNTU4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nzCXrmzj6o5suzbagtki2lJBAlMXWlrT6Ck7T9Ab0x8";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export const getTrendingMovies = async () => {
  const url = `${BASE_URL}/trending/movie/day`;
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch {
    return [];
  }
};

export const searchMovies = async (query) => {
  const url = `${BASE_URL}/search/movie?query=${encodeURIComponent(
    query
  )}&language=en-US&page=1&include_adult=false`;
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch {
    return [];
  }
};

export const getMovieDetails = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}`;
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch {
    return null;
  }
};

export const getMovieCredits = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/credits`;
  try {
    const response = await axios.get(url, options);
    return response.data.cast;
  } catch {
    return [];
  }
};

export const getMovieReviews = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/reviews`;
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch {
    return [];
  }
};

export const getImageUrl = (path) => {
  return `${IMAGE_BASE_URL}${path}`;
};
