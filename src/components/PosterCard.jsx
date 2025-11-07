import React from "react";
import { IMAGE_URL } from "@/utils/constant";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const PosterCard = ({ posterPath, movieTitle, movieName, mediaType, id, releaseDate, rating }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/details/${mediaType}/${movieName || movieTitle}/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updatedReleaseDate = releaseDate?.split("-")[0];


  return (
    <motion.div
      className="flex flex-col cursor-pointer max-w-34"
      onClick={handleNavigation}
      initial={{ scale: 1 }}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <img
        src={IMAGE_URL + posterPath}
        alt={movieTitle || movieName}
        loading="lazy"
        className="h-50 rounded-lg object-cover"
      />
      <p className="text-sm line-clamp-1 text-left tracking-wide leading-5 px-0.5 mt-2">
        {movieTitle || movieName}
      </p>

      {/* Released Year and Rating */}
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs">{updatedReleaseDate}</span>
        <div className="flex items-center">
          <Star color="#facc15" fill="#facc15" size={12} />
          <span className="text-xs text-gray ml-2">{rating?.toFixed(1) || "N/A"}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PosterCard;
