import { Star } from "lucide-react";
import React from "react";

const ExploreMediaRating = ({ mediaDetails }) => {
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, idx) => {
          // Calculate number of filled stars based on vote_average
          const filledStars = Math.floor(mediaDetails?.vote_average / 2);
          return (
            <Star
              key={idx}
              fill={idx < filledStars ? "#facc15" : "none"}
              color="#facc15"
              className="w-3 md:w-6 lg:w-5 h-3 md:h-6 lg:h-5"
            />
          );
        })}
      </div>
      <span className="text-xs md:text-lg font-light text-white tracking-widest uppercase">
        {parseFloat(mediaDetails?.vote_average).toFixed(1)}
      </span>
    </div>
  );
};

export default ExploreMediaRating;
