import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/api";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  // console.log(movieId);

  useEffect(() => {
    fetchReviews(movieId);
  }, [movieId]);

  const fetchReviews = async (id) => {
    try {
      const movieReviews = await getReviews(id);
      console.log(movieReviews);
      setReviews(movieReviews);
    } catch (error) {
      return <h1>{error.message}</h1>;
    }
  };

  const IMAGE_URL = `https://image.tmdb.org/t/p/w200`;

  return (
    <Box margin={4}>
      {reviews.length > 0 ? (
        <Typography
          variant="h3"
          component="h1"
          marginLeft={31}
          marginBottom={3}
        >
          Reviews
        </Typography>
      ) : (
        <Typography variant="h5" component="p" marginLeft={40} marginBottom={3}>
          Not found any reviews yet
        </Typography>
      )}
      <ul>
        {reviews.length > 0 &&
          reviews.map(
            ({ id, author_details, content, created_at, updated_at }) => (
              <li key={id}>
                <Stack direction="row" spacing={6}>
                  <Box>
                    {author_details && (
                      <img
                        src={`${IMAGE_URL}${author_details.avatar_path}`}
                        alt=""
                      />
                    )}
                    <Box marginLeft={3}>
                      <Typography variant="body2" component="p" marginTop={0.5}>
                        Author: {author_details.username}
                      </Typography>
                      <Typography variant="body2" component="p" marginTop={0.5}>
                        Rating: {author_details.rating}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    {author_details && (
                      <h4>
                        Written by{" "}
                        {author_details.username || author_details.name} on{" "}
                        {created_at}
                      </h4>
                    )}
                    <br />
                    {content && <p>{content}</p>}
                  </Box>
                </Stack>
              </li>
            )
          )}
      </ul>
    </Box>
  );
};

export default Reviews;
