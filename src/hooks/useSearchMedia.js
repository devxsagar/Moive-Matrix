import { API_OPTIONS } from "@/utils/constant";
import { useEffect, useRef, useState } from "react";

const useSearchMedia = (query, page) => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  const prevQueryRef = useRef("");

  useEffect(() => {
    if (!query) return;

    const fetchSearchData = async () => {
      try {
        setLoading(true);

        const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`;

        const res = await fetch(url, API_OPTIONS);
        const json = await res.json();
        const filteredResults = json.results.filter((result) => result.media_type !== "person");

        // If the query changed, reset data instead of appending
        if (prevQueryRef.current !== query) {
          setSearchData(filteredResults);
        } else {
          // If same query, append only when page > 1
          if (page > 1) {
            setSearchData((prevResults) => [...prevResults, ...filteredResults]);
          } else {
            setSearchData(filteredResults);
          }
        }

        // Update previous query reference
        prevQueryRef.current = query;
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchData();
  }, [query, page]);

  return {searchData, loading};
};

export default useSearchMedia;
