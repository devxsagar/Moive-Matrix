import React from "react";
import { IMAGE_URL } from "@/utils/constant";
import { useNavigate } from "react-router-dom";

const PosterCard = ({ posterPath, movieTitle, movieName, mediaType, id }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/details/${mediaType}/${movieName || movieTitle}/${id}`);
    window.scrollTo(top, "smooth");
  };

  return (
    <div className="flex flex-col items-center" onClick={handleNavigation}>
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
