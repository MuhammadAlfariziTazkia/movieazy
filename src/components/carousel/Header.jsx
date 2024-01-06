import { Carousel } from "flowbite-react";
import CarouselElement from "./elements/CarouselElement";

const Header = (data) => {
  return (
    <Carousel>
      {data.movies.map((movie, i) => {
        return <CarouselElement movieData={movie} key={i} />;
      })}
    </Carousel>
  );
};

export default Header;
