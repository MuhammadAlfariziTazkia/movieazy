import "./CarouselElement.css";

const CarouselElement = (data) => {
  console.log(data);
  return (
    <div
      className="Carousel-container"
      style={{
        backgroundImage: `url(${process.env.REACT_APP_BASE_IMAGE_URL}${data.movieData.backdrop_path})`,
        backgroundSize: "cover",
      }}
    >
      <div className="Carousel-element backdrop-blur-sm p-5">
        <div className="Carousel-element-poster lg:w-1/4 sm:w-full md:w-1/4 mt-16">
          <img
            src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${data.movieData.poster_path}`}
            alt="Carousel-element-poster"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="p-5 lg:w-3/4 sm:w-full md:w-3/4 mt-16">
          <div className="text-white text-5xl font-semibold text-left">
            {data.movieData.title}
            
          </div>
          <div className="text-white text-xl text-left mt-5">
            {data.movieData.overview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselElement;
