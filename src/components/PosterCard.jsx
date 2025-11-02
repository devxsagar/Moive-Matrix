import React from "react";
import { IMAGE_URL } from "@/utils/constant";

const PosterCard = ({ posterPath, movieTitle, movieName }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={IMAGE_URL + posterPath}
        alt={movieTitle || movieName}
        loading="lazy"
        className="h-50 rounded-lg"
      />
      <p className="text-sm text-center tracking-wide leading-5 px-0.5 mt-2">
        {movieTitle || movieName}
      </p>
    </div>
  );
};

export default PosterCard;
