import { IMAGE_URL } from "@/utils/constant";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Hero = ({ trendingData }) => {
  // Handle case when trendingData is not yet available
  if (!trendingData || trendingData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed left-0 top-0 ">
      <Carousel className="relative">
        {/* Carousel Content */}
        <CarouselContent>
          {/* Map through trendingData to create CarouselItems */}
          {trendingData.map((item, index) => {
            return (
              <CarouselItem key={index}>
                {/* Hero Image */}
                <img
                  src={IMAGE_URL + item.backdrop_path}
                  alt="backdrop"
                  className="w-full h-[70vh] lg:h-screen object-cover object-center lg:object-top"
                />

                <div cl />
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Carousel Navigation Buttons */}
        <CarouselPrevious className="absolute left-5 bg-transparent" />
        <CarouselNext className="absolute right-5 bg-transparent" />
      </Carousel>
    </div>
  );
};

export default Hero;
