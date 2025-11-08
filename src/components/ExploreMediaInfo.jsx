import React, { useState } from "react";
import ExploreMediaRating from "./ExploreMediaRating";
import ExploreMediaAdditionalInfo from "./ExploreMediaAdditionalInfo";
import { Button } from "./ui/button";
import { Bookmark,  Play } from "lucide-react";
import Trailer from "@/sections/Trailer";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToList,
  addTvSeriesToList,
  removeMovieFromList,
  removeTvSeriesFromList,
} from "@/store/myListSlice";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const ExploreMediaInfo = ({ mediaDetails, directors, cast, mediaType, id }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  // const [isInWatchList, setIsInWatchList] = useState(false);

  const dispatch = useDispatch();

  const releaseDate = mediaDetails?.release_date || mediaDetails?.first_air_date;

  const runTimeForMovies =
    mediaDetails?.runtime && mediaDetails?.runtime < 60
      ? mediaDetails?.runtime + "min"
      : Math.floor(mediaDetails?.runtime / 60) + "h " + (mediaDetails?.runtime % 60) + "min";

  const runTimeForSeries =
    mediaDetails?.last_episode_to_air?.runtime < 60
      ? mediaDetails?.last_episode_to_air?.runtime + "min"
      : Math.floor(mediaDetails?.last_episode_to_air?.runtime / 60) +
        "h " +
        (mediaDetails?.last_episode_to_air?.runtime % 60) +
        "min";

  const handleWatchListButton = (type) => {
    if (type === "remove") {
      if (mediaType === "movie") {
        dispatch(removeMovieFromList(Number(id)));
      } else {
        dispatch(removeTvSeriesFromList(Number(id)));
      }
    } else {
      if (mediaType === "movie") {
        dispatch(addMovieToList(mediaDetails));
      } else {
        dispatch(addTvSeriesToList(mediaDetails));
      }
    }
  };

  const { movies, tvSeries } = useSelector((state) => state.myList);

  const isInWatchlist =
    movies.find((movie) => movie.id === Number(id)) || tvSeries.find((tv) => tv.id === Number(id));

  return (
    <div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
        {mediaDetails?.title || mediaDetails?.name}
      </h2>
      <div className="flex items-center gap-3 md:gap-5 mt-2 text-sm md:text-base">
        <p className="text-gray">{mediaDetails?.origin_country?.[0] || "N/A"}</p>
        <span className="text-gray">•</span>

        <p className="text-gray">{releaseDate?.split("-")?.[0] || "N/A"}</p>

        <span className="text-gray">•</span>

        <p className="text-gray">
          {mediaType === "movie" ? runTimeForMovies : runTimeForSeries || "N/A min"}
        </p>

        <span className="text-gray">•</span>

        {/* Rating */}
        <ExploreMediaRating mediaDetails={mediaDetails} />
      </div>

      {/* Description */}
      <p className="mt-5 leading-relaxed max-w-3xl line-clamp-5 text-base lg:text-lg">
        {mediaDetails?.overview}
      </p>

      <div className="mt-5 text-base lg:text-lg">
        <ExploreMediaAdditionalInfo
          mediaDetails={mediaDetails}
          directors={directors}
          cast={cast}
          mediaType={mediaType}
        />
      </div>

      {/* Buttons */}
      <div className="mt-15 space-x-5 flex items-center">
        <Button
          className="px-3 py-7 lg:px-5 lg:py-8 text-sm lg:text-lg text-white bg-red hover:bg-red/80 cursor-pointer rounded-full"
          variant="secondary"
          onClick={() => setShowTrailer(true)}
        >
          <Play className="ml-1" />
          Watch Trailer
        </Button>

        {/* Watchlist Button */}
        {isInWatchlist ? (
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className=" p-4 rounded-full bg-gray/20 cursor-pointer"
                  onClick={() => handleWatchListButton("remove")}
                >
                  {" "}
                  <Bookmark fill="white" className="lg:w-8 lg:h-8" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Remove from watchlist</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
               <button
                  className=" p-4 rounded-full bg-gray/20 cursor-pointer"
                  onClick={() => handleWatchListButton("add")}
                >
                  {" "}
                  <Bookmark className="lg:w-8 lg:h-8" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Add to watchlist</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      {showTrailer && (
        <Trailer
          mediaType={mediaType}
          id={id}
          setShowTrailer={setShowTrailer}
          name={mediaDetails?.title || mediaDetails?.name}
        />
      )}
    </div>
  );
};

export default ExploreMediaInfo;
