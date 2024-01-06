import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import getAllMovies from "../../Api";
import MovieCard from "../../components/moviecard/MovieCard";
import "./Home.css";
import Header from "../../components/carousel/Header";

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
      <Header movies={movieList} />
      <div className="p-5">
        <div className="Movie-container">
          <MovieListElement />
        </div>
      </div>
    </>
  );
};

export default Home;
