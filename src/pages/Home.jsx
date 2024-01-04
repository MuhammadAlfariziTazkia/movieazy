import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import getAllMovies from "../Api";
import MovieCard from "../components/moviecard/MovieCard";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getAllMovies().then((data) => {
      setMovieList(data.results);
    });
  }, []);

  const MovieListElement = () => {
    return movieList.map((movie, i) => {
      return <MovieCard movieData={movie} key={i} />;
    });
  };

  return (
    <>
      <Navbar />
      <div className="p-5">
        <div className="grid grid-cols-6 gap-4">
          <MovieListElement />
        </div>
      </div>
    </>
  );
};

export default Home;
