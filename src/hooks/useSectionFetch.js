import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const useSectionFetch = ({ category, mediaType, page = 1 }) => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      let url = "";
      if (category === "trending") {
        url = `https://api.themoviedb.org/3/trending/${mediaType}/day?language=en-US&page=${page}`;
      } else {
        url = `https://api.themoviedb.org/3/${mediaType}/${category}?language=en-US&page=${page}`;
      }
      const response = await fetch(url, API_OPTIONS);
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, [page]);

  return data;
};

export default useSectionFetch;
