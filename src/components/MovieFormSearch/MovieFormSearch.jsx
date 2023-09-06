import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const MovieFormSearch = ({ onSubmitForm }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleFormSearch = (e) => setSearchQuery(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmitForm(searchQuery);
  };
  return (
    <Box component="form" onSubmit={handleFormSubmit}>
      <TextField
        id="outlined-basic"
        label="Movie title"
        variant="outlined"
        value={searchQuery}
        onChange={handleFormSearch}
      />
      <Button type="submit" variant="contained">
        Search Movie
      </Button>
    </Box>
  );
};

export default MovieFormSearch;
