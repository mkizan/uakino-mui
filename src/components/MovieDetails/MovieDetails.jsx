import React, { useState, useEffect } from "react";
import { useParams, useLocation, Outlet, Link } from "react-router-dom";
import { getMovieDetails } from "../../services/api";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetchMovie(movieId);
  }, [movieId]);

  const fetchMovie = async (id) => {
    try {
      const movieDetail = await getMovieDetails(id);
      setMovie(movieDetail);
    } catch (error) {
      console.log(error.message);
    }
  };

  const IMAGE_URL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <main>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={6}>
          <Link to={location.state?.from}>Back</Link>
          <Box marginTop={1}>
            {movie.poster_path && <img src={IMAGE_URL} alt={movie.title} />}
          </Box>
          <Box marginBottom={1}>
            {movie.title && (
              <Typography variant="h4" component="h1" marginBottom={1}>
                {movie.title}
              </Typography>
            )}
            {movie.overview && (
              <Box marginBottom={2}>
                <Typography variant="body1" component="p">
                  {movie.overview}
                </Typography>
              </Box>
            )}

            {movie.genres && (
              <Box marginBottom={0.5}>
                <Typography variant="body1" component="span">
                  Genres:
                </Typography>
                {movie.genres.map(({ id, name }) => (
                  <Typography variant="body1" component="span" key={id}>
                    {" "}
                    {name},
                  </Typography>
                ))}
              </Box>
            )}
            {movie.vote_average && (
              <Typography variant="body1" component="p" marginBottom={0.5}>
                Rating: {movie.vote_average}
              </Typography>
            )}
            {movie.vote_count && (
              <Typography variant="body1" component="p" marginBottom={0.5}>
                Vote: {movie.vote_count}
              </Typography>
            )}
            {movie.adult && (
              <Typography variant="body1" component="p" marginBottom={0.5}>
                18+
              </Typography>
            )}
            {movie.runtime > 0 ? (
              <Typography variant="body1" component="p" marginBottom={0.5}>
                Runtime: {movie.runtime} min
              </Typography>
            ) : (
              <Typography variant="body1" component="p" marginBottom={0.5}>
                Runtime: unknown
              </Typography>
            )}
            {movie.budget > 0 ? (
              <Typography variant="body1" component="p" marginBottom={0.5}>
                Budget: ${movie.budget}
              </Typography>
            ) : (
              <Typography variant="body1" component="p" marginBottom={0.5}>
                Budget: unknown
              </Typography>
            )}
            <Link to="cast" state={{ from: location }}>
              CAST
            </Link>
            <Link to="reviews">REVIEWS</Link>
          </Box>
        </Stack>
      </Container>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </main>
  );
};

export default MovieDetails;
