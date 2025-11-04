import { useEffect, useState } from "react";
import { API_OPTIONS } from "@/utils/constant";

const useMediaCredits = (mediaType, id) => {
  const [directors, setDirectors] = useState({});
  const [cast, setCast] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mediaType || !id) return;

    const controller = new AbortController();

    const getCredits = async () => {
      try {
        setLoading(true);

        const url = `https://api.themoviedb.org/3/${mediaType}/${id}/credits?language=en-US`;

        const res = await fetch(url, API_OPTIONS);
        const json = await res.json();

        setCast(json.cast);
        setDirectors(json.crew.filter((member) => member.known_for_department === "Directing"));
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching similar media:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    getCredits();

    return () => {
      controller.abort();
    };
  }, [mediaType, id]);



  return { directors, cast, loading };
};

export default useMediaCredits;
