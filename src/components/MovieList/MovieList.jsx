import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getSearchMovie } from "../../services/api";

const MovieList = ({ searchQuery }) => {
  const [foundMovies, setFoundMovies] = useState([]);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (!searchQuery) return;

    fetchFoundMovies(searchQuery);
  }, [searchQuery]);

  const fetchFoundMovies = async (query) => {
    const movies = await getSearchMovie(query);
    setFoundMovies(movies);
  };

  return (
    <ul>
      {foundMovies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`../movie/${id}`} state={{ from: location }}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
