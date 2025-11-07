import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useSearchMedia from "@/hooks/useSearchMedia";
import { IMAGE_URL } from "@/utils/constant";
import SearchResultCardSkeleton from "./skeleton/SearchResultCardSkeleton";

const SearchResult = ({
  inputRef,
  showSearchResultBox,
  setShowSearchResultBox,
  searchQuery,
  setSearchQuery,
}) => {
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const { searchData: searchResult, loading } = useSearchMedia(debouncedQuery, page);

  // debouncing
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchQuery]);

  const handleShowMore = () => {
    if (page < 20) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // reset page when query changes
  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  // navigate to explore page
  const handleNavigation = (mediaType, movieTitle, movieName, id) => {
    navigate(`/details/${mediaType}/${movieName || movieTitle}/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowSearchResultBox(false);
    setSearchQuery("");
  };

  return (
    showSearchResultBox && (
      <motion.div
        ref={inputRef}
        className="absolute top-10 left-0 w-full min-h-[10vh] max-h-[60vh] bg-white/80 overflow-y-scroll scrollbar-none  rounded-xl text-black p-5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {debouncedQuery === "" ? (
          <div className="text-center">Search for a movie or show</div>
        ) : loading ? (
          <SearchResultCardSkeleton />
        ) : (
          <div className="space-y-3">
            {searchResult?.length > 0 &&
              searchResult.map((media) => {
                return (
                  <motion.div
                    key={media?.id}
                    className="flex items-center gap-x-4 bg-white rounded-lg p-2 cursor-pointer"
                    onClick={() =>
                      handleNavigation(media?.media_type, media?.title, media?.name, media?.id)
                    }
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <img
                      src={IMAGE_URL + media?.poster_path}
                      alt={media?.title || media?.name}
                      className="h-20 rounded-lg"
                    />
                    <div>
                      <p className="font-bold text-xs md:text-base">
                        {media?.title || media?.name}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        )}

        {/* show more button  */}
        {debouncedQuery !== "" && (
          <div className="text-center mt-2 cursor-pointer" onClick={handleShowMore}>
            {searchResult?.length > 0 ? (
              <span className="hover:text-red hover:underline hover-animation">show more</span>
            ) : (
              <span>Nohting is found</span>
            )}
          </div>
        )}
      </motion.div>
    )
  );
};

export default SearchResult;
