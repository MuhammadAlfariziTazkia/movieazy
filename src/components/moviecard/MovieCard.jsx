import "./MovieCard.css";

const MovieCard = (data) => {
  return (
    <div className="Movie-card-wrapper relative p-0 m-2 shadow-lg">
      <div className="Movie-card-detail mb-0 absolute rounded-b-lg font-semibold mb-2 text-left right-0 left-0 p-5 text-white">
        <div className="Movie-card-detail-title line-clamp-2">
        {data.movieData.title}
        </div>
      </div>
      <div className="Movie-card-poster">
        <img src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${data.movieData.poster_path}`} alt="movie-card-poster" className="rounded-lg"/>
      </div>
    </div>
  );
};

export default MovieCard;
