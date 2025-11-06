import { API_OPTIONS } from "@/utils/constant";
import { useEffect, useState } from "react";

const useSearchMedia = (query, page) => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;

    const fetchSearchData = async () => {
      try {
        setLoading(true);

        const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`;

        const res = await fetch(url, API_OPTIONS);
        const json = await res.json();
        const filteredResults = json.results.filter((result) => result.media_type !== "person");

        // if it's the first page, set the search data directly
        // else, append to the existing search data
        if (page === 1) {
          setSearchData(filteredResults);
        } else {
          setSearchData((prevResults) => [...prevResults, ...filteredResults]);
        }
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchData();
  }, [query, page]);

  return searchData;
};

export default useSearchMedia;
