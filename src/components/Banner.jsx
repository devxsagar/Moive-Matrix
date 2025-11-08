import { IMAGE_URL } from "@/utils/constant";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Info, Play, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import Trailer from "@/sections/Trailer";

const Banner = ({ data }) => {
  // State to manage overview text expansion
  const [overviewClicked, setOverviewClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return !data || data.length === 0 ? (
    <Skeleton className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[1536px] h-[70vh] lg:h-screen bg-black/70" />
  ) : (
    <div>
      <div className="absolute left-1/2 -translate-x-1/2 top-0  w-full max-w-[1536px]">
        <Carousel className="relative" setApi={setApi} opts={{loop: true}}>
          {/* Carousel Content */}
          <CarouselContent>
            {/* Map through trendingData to create CarouselItems */}
            {data.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  {/* Hero Image */}
                  <div className="w-full mx-auto h-[70vh] lg:h-screen relative">
                    <img
                      src={IMAGE_URL + item.backdrop_path}
                      alt="backdrop"
                      loading="lazy"
                      className=" w-full h-full object-cover object-center lg:object-top"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 z-50 w-full h-full bg-black/40" />

                    <div className="absolute left-0 bottom-0 z-80 w-full h-30 bg-linear-to-b from-transparent via-black/70 to-black" />

                    {/* Text Content */}
                    <div className="max-w-4xl absolute  left-0 bottom-4 md:left-25 md:bottom-20 xl:left-40 xl:top-1/2 xl:-translate-y-1/2 z-90 p-5">
                      <h3 className="text-2xl md:text-5xl lg:text-7xl font-clash font-semibold tracking-tight">
                        {item.title || item.name}
                      </h3>
                      <p
                        className={`mt-3 max-w-xs md:max-w-lg  text-xs md:text-lg  leading-4 md:leading-6 text-gray ${overviewClicked ? "line-clamp-none" : "line-clamp-4"}`}
                        onClick={() => setOverviewClicked((prev) => !prev)}
                      >
                        {item.overview}
                      </p>

                      <div className="mt-4 md:mt-6 flex items-center gap-x-4 md:gap-x-6 lg:gap-x-8">
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, idx) => {
                            // Calculate number of filled stars based on vote_average
                            const filledStars = Math.floor(item.vote_average / 2);
                            return (
                              <Star
                                key={idx}
                                fill={idx < filledStars ? "#facc15" : "none"}
                                color="#facc15"
                                className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7"
                              />
                            );
                          })}
                        </div>
                        <div>
                          <span className="text-sm md:text-lg font-light text-white tracking-widest uppercase">
                            {item.vote_average.toFixed(1)} Rating
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-4 mt-6 md:mt-8">
                        <Button
                          className=" bg-red text-white w-30 md:w-36 lg:w-48 py-5 md:py-6 lg:py-8 text-xs md:text-sm lg:text-lg font-medium cursor-pointer rounded-full"
                          onClick={() => {
                            setSelectedItem(item);
                            setShowTrailer(true);
                          }}
                        >
                          <Play />
                          Watch Trailer
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-white! text-black hover:text-black/90w-30 md:w-36 lg:w-48 py-5 md:py-6 lg:py-8 text-xs md:text-sm lg:text-lg font-medium cursor-pointer rounded-full"
                        >
                          <Info />
                          Info
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Carousel Navigation Buttons */}
          <CarouselPrevious className="absolute left-5 bg-transparent max-lg:hidden" />
          <CarouselNext className="absolute right-5 bg-transparent max-lg:hidden" />
        </Carousel>
      </div>

      {showTrailer && (
        <Trailer
          mediaType={selectedItem?.media_type}
          id={selectedItem?.id}
          setShowTrailer={setShowTrailer}
          name={selectedItem?.title || selectedItem?.name}
        />
      )}
    </div>
  );
};

export default Banner;
