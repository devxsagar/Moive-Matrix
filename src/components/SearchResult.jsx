import useSearchMedia from "@/hooks/useSearchMedia";
import { IMAGE_URL } from "@/utils/constant";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ inputRef, showSearchResultBox, setShowSearchResultBox, searchQuery }) => {
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const searchResult = useSearchMedia(debouncedQuery, page);

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

  const handleNavigation = (mediaType, movieTitle, movieName, id) => {
    navigate(`/details/${mediaType}/${movieName || movieTitle}/${id}`);
    window.scrollTo(top, "smooth");
    setShowSearchResultBox(false);
  };

  return (
    showSearchResultBox && (
      <div
        ref={inputRef}
        className="absolute top-10 left-0 w-full min-h-[10vh] max-h-[60vh] bg-white/50 overflow-y-scroll  rounded-xl text-black p-5"
      >
        {debouncedQuery === "" ? (
          <div className="text-center">Search for a movie or show</div>
        ) : (
          <div className="space-y-3">
            {searchResult?.length > 0 &&
              searchResult.map((media) => {
                return (
                  <div
                    key={media?.id}
                    className="flex items-center gap-x-4 bg-white rounded-lg p-2 cursor-pointer"
                    onClick={() =>
                      handleNavigation(media?.media_type, media?.title, media?.name, media?.id)
                    }
                  >
                    <img
                      src={IMAGE_URL + media?.poster_path}
                      alt={media?.title || media?.name}
                      className="h-20 rounded-lg"
                    />
                    <div>
                      <p className="font-bold">{media?.title || media?.name}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {debouncedQuery !== "" && (
          <div className="text-center mt-2 cursor-pointer" onClick={handleShowMore}>
            show more
          </div>
        )}
      </div>
    )
  );
};

export default SearchResult;
