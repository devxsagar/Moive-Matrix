import React from "react";
import useScreenSize from "@/hooks/useScreenSize";
import { IMAGE_URL } from "@/utils/constant";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SectionCarousel = ({ data }) => {
  // Get screen size
  const screen = useScreenSize();
  return (
    <div>
      <Carousel opts={{ slidesToScroll: screen > 1024 ? 4 : 2 }}>
        <CarouselContent>
          {data.map((movie) => {
            return (
              <CarouselItem
                key={movie.id}
                className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/8 "
              >
                <div>
                  <img
                    src={IMAGE_URL + movie.poster_path}
                    alt={movie.title}
                    className="h-50 rounded-lg"
                  />
                  <p className="text-sm text-center tracking-wide leading-5 px-0.5 mt-2">
                    {movie.title}
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent" />
        <CarouselNext className="bg-transparent" />
      </Carousel>
    </div>
  );
};

export default SectionCarousel;
