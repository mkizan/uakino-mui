import React, { useEffect, useState } from "react";
import { getCredits } from "../../services/api";
import { useParams, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";

const Cast = () => {
  const [credits, setCredits] = useState([]);

  const { movieId } = useParams();
  // const location = useLocation();

  useEffect(() => {
    fetchCredits(movieId);
  }, [movieId]);

  const fetchCredits = async (id) => {
    try {
      const fetchedCredits = await getCredits(id);
      setCredits(fetchedCredits);
    } catch (error) {
      return <h1>{error.message}</h1>;
    }
  };

  return (
    <>
      <ul>
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {credits.map(({ id, name, popularity, profile_path, character }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
              ) : (
                "IMAGE NOT FOUND"
              )}
              {name && <h3>{name}</h3>}
              {character && <p>Role: {character}</p>}
              {popularity && <p>Popularity: {popularity.toFixed(2)}/100</p>}
            </li>
          ))}
        </Stack>
      </ul>
    </>
  );
};

export default Cast;
