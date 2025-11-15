import { BACKDROP_URL } from "@/utils/constant";
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
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const parentVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0.0, 0.2, 1], // buttery smooth
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] } },
};

const Banner = ({ data, mediaType }) => {
  // State to manage overview text expansion
  const [overviewClicked, setOverviewClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [api, setApi] = useState(null);

  const navigate = useNavigate();

  const handleMoreInfo = (item) => {
    navigate(`/details/${item.media_type || mediaType}/${item.name || item.title}/${item.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // automatic banner scroll
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
        <Carousel className="relative" setApi={setApi} opts={{ loop: true }}>
          {/* Carousel Content */}
          <CarouselContent>
            {/* Map through trendingData to create CarouselItems */}
            {data.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  {/* Hero Image */}
                  <div className="w-full mx-auto h-[70vh] lg:h-screen relative">
                    <img
                      src={BACKDROP_URL + item.backdrop_path}
                      alt="backdrop"
                      loading="lazy"
                      className=" w-full h-full object-cover object-center lg:object-top"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 z-50 w-full h-full bg-black/40" />

                    <div className="absolute left-0 bottom-0 z-80 w-full h-30 bg-linear-to-b from-transparent via-black/70 to-black" />

                    {/* Text Content */}
                    <motion.div
                      className="max-w-4xl absolute  left-0 bottom-4 md:left-25 md:bottom-20 xl:left-40 xl:top-1/2 xl:-translate-y-1/2 z-90 p-5"
                      variants={parentVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ amount: 0.4 }}
                    >
                      <motion.h3
                        className="text-2xl md:text-5xl lg:text-7xl font-clash font-semibold tracking-tight"
                        variants={childVariants}
                      >
                        {item.title || item.name}
                      </motion.h3>
                      <motion.p
                        className={`mt-3 max-w-xs md:max-w-lg  text-xs md:text-lg  leading-4 md:leading-6 text-gray ${overviewClicked ? "line-clamp-none" : "line-clamp-4"}`}
                        variants={childVariants}
                        onClick={() => setOverviewClicked((prev) => !prev)}
                      >
                        {item.overview}
                      </motion.p>

                      <motion.div
                        className="mt-4 md:mt-6 flex items-center gap-x-4 md:gap-x-6 lg:gap-x-8"
                        variants={childVariants}
                      >
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
                      </motion.div>
                      <motion.div className="flex gap-4 mt-6 md:mt-8" variants={childVariants}>
                        <Button
                          className=" bg-red hover:bg-red/80 hover:scale-105 hover-animation text-white w-30 md:w-36 lg:w-48 py-5 md:py-6 lg:py-8 text-xs md:text-sm lg:text-lg font-medium cursor-pointer rounded-full"
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
                          className="bg-white! hover:bg-white/80! hover:scale-105  hover-animation text-black hover:text-black/90w-30 md:w-36 lg:w-48 py-5 md:py-6 lg:py-8 text-xs md:text-sm lg:text-lg font-medium cursor-pointer rounded-full"
                          onClick={() => handleMoreInfo(item)}
                        >
                          <Info />
                          More Info
                        </Button>
                      </motion.div>
                    </motion.div>
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
          mediaType={selectedItem?.media_type || mediaType}
          id={selectedItem?.id}
          setShowTrailer={setShowTrailer}
          name={selectedItem?.title || selectedItem?.name}
        />
      )}
    </div>
  );
};

export default Banner;
