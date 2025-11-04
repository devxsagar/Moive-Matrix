import { useEffect, useState } from "react";
import { API_OPTIONS } from "@/utils/constant";

const useGetMediaImage = (mediaType, id) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mediaType || !id) return;

    // Create AbortController to cancel fetch if component unmounts
    const controller = new AbortController();

    // Async function to fetch media images
    const getMediaImage = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = `https://api.themoviedb.org/3/${mediaType}/${id}/images`;
        const res = await fetch(url, API_OPTIONS);

        // Throw error for failed HTTP responses
        if (!res.ok) throw new Error(`Http error! status: ${res.status}`);

        const json = await res.json();
        setImage(json.backdrops);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching images:", err);
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getMediaImage();

    // Cleanup: cancel ongoing fetch when component unmounts
    return () => controller.abort();
  }, [mediaType, id]);

  return { image, error, loading };
};

export default useGetMediaImage;
