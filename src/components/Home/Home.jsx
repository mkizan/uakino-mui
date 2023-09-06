import { useEffect, useState } from "react";
import { getTrendingDayMovies } from "../../services/api";
import { NavLink, useLocation } from "react-router-dom";

const Home = ({ title }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrendingDayMovies();
      setTrendingMovies(movies);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {trendingMovies.map(({ id, title, name, original_title }) => (
          <li key={id}>
            <NavLink to={`/movie/${id}`} state={{ from: location }}>
              {title || name || original_title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
