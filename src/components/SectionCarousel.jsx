import React from "react";
import useScreenSize from "@/hooks/useScreenSize";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PosterCard from "./PosterCard";

const SectionCarousel = ({ data, mediaType }) => {
  // Get screen size
  const screen = useScreenSize();
 
  return (
    <div>
      <Carousel opts={{ slidesToScroll: screen > 1024 ? 4 : 2, dragFree: true }}>
        <CarouselContent>
          {data.map((movie) => {
            return (
              <CarouselItem
                key={movie.id}
                className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/8 "
              >
                <PosterCard
                  posterPath={movie.poster_path}
                  movieTitle={movie.title}
                  movieName={movie.name}
                  mediaType={mediaType}
                  releaseDate={movie.release_date || movie.first_air_date}
                  rating={movie.vote_average}
                  id={movie.id}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent max-lg:hidden" />
        <CarouselNext className="bg-transparent max-lg:hidden" />
      </Carousel>
    </div>
  );
};

export default SectionCarousel;
