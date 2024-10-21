import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";

import { lazy, Suspense } from "react";

const Cast = lazy(() => import("./components/Cast/Cast"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <div>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />{" "}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
