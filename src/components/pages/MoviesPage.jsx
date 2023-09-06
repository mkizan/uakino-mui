import { useState } from "react";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import MovieFormSearch from "../MovieFormSearch/MovieFormSearch";
import MovieList from "../MovieList";

export const MoviesPage = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (value) => setQuery(value);

  return (
    <>
      <MovieFormSearch onSubmitForm={handleSubmit} />
      <MovieList searchQuery={query} />
    </>
  );
};
