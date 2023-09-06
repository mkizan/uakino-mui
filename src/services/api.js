import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "79964e545564d6d3d9aa89c91f89d5d9";

export const getTrendingDayMovies = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const getCredits = async (id) => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data.cast;
};

export const getReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data.results;
};

export const getSearchMovie = async (value) => {
  const response = await axios.get(
    `/search/movie?query=${value}&api_key=${API_KEY}`
  );
  return response.data.results;
};
