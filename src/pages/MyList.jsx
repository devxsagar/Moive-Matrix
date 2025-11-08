import PosterCard from "@/components/PosterCard";
import { Button } from "@/components/ui/button";
import { removeMovieFromList, removeTvSeriesFromList } from "@/store/myListSlice";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyList = () => {
  const [mediaType, setMediaType] = useState("movie");

  const { movies, tvSeries } = useSelector((state) => state.myList);
  const dispatch = useDispatch();

  // UI shows based on mediaType
  const data = mediaType === "movie" ? movies : tvSeries;

  const handleRemove = (id) => {
    if (mediaType === "movie") {
      dispatch(removeMovieFromList(id));
    } else {
      dispatch(removeTvSeriesFromList(id));
    }
  };

  return (
    <div className="pt-15 pb-15 min-h-screen">
      <div className="flex items-center gap-1.5">
        <h2 className="text-4xl font-bold ">Watchlist</h2>
        {/* <Clapperboard className="w-7 h-7" /> */}
      </div>

      <div className="mt-8 flex items-center justify-center gap-x-5">
        <Button
          className={`bg-transparent hover:bg-transparent text-white cursor-pointer ${mediaType === "movie" && "text-red  underline  underline-offset-8 decoration-2"}`}
          onClick={() => setMediaType("movie")}
        >
          Movies
        </Button>
        <Button
          className={`bg-transparent hover:bg-transparent text-white cursor-pointer ${mediaType === "tv" && "text-red underline  underline-offset-8 decoration-2"}`}
          onClick={() => setMediaType("tv")}
        >
          TV Series
        </Button>
      </div>

      {/* Content */}
      {data.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-15 place-items-center mt-10">
          {data.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <PosterCard
                  key={item.id}
                  posterPath={item.poster_path}
                  movieTitle={item.title}
                  movieName={item.name}
                  id={item.id}
                  mediaType={mediaType}
                  releaseDate={item.release_date || item.first_air_date}
                  rating={item.vote_average}
                />
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="rounded-full mt-2 cursor-pointer  flex items-center justify-center"
                  onClick={() => handleRemove(item.id)}
                >
                  <Button variant="destructive" className="w-full cursor-pointer">
                    Remove
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center mt-15 text-gray text-xl">
          No content to show
        </div>
      )}
    </div>
  );
};

export default MyList;
