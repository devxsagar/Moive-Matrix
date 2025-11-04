import { useEffect, useState } from "react";
import { API_OPTIONS } from "@/utils/constant";

const useRelatedMedia = (mediaType, id, category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mediaType || !id) return;

    // Create AbortController to cancel fetch if component unmounts
    const controller = new AbortController();

    const getSimilarMedia = async () => {
      try {
        setLoading(true);

        let url = "";

        if (category === "similar") {
          url = `https://api.themoviedb.org/3/${mediaType}/${id}/similar?language=en-US&page=1`;
        } else  {
          url = `https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?language=en-US&page=1`
        }

        const res = await fetch(url, API_OPTIONS);
        const json = await res.json();
        setData(json.results);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching similar media:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    getSimilarMedia();

    () => controller.abort();
  }, [mediaType, id]);

  return { data, loading };
};

export default useRelatedMedia;
