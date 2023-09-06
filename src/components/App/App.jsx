import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, MovieDetailsPage, MoviesPage } from "../pages";
import Layout from "../Layout";
import Cast from "../Cast";
import Reviews from "../Reviews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movie/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      {/* <Route path="/" element={} /> */}
    </Routes>
  );
}

export default App;
