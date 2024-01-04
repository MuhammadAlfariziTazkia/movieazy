import axios from "axios";

const getAllMovies = async () => {
  const movieList = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
  );

  return movieList.data;
};

export default getAllMovies;
