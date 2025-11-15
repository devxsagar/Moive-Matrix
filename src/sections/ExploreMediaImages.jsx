import React, { useEffect, useState } from "react";
import useGetMediaImage from "@/hooks/useGetMediaImage";
import { IMAGE_URL, LARGE_POSTER_URL } from "@/utils/constant";
import ShowMoreButton from "../components/ShowMoreButton";
import { motion } from "framer-motion";

const ExploreMediaImages = ({ mediaType, id }) => {
  const [imageLimit, setImageLimit] = useState(10);
  const [showMore, setShowMore] = useState(false);

  // Fetch media images
  const { image, error, loading } = useGetMediaImage(mediaType, id);

  // Set image limit
  useEffect(() => {
    if (!image) return;
    if (image.length > 50) {
      setImageLimit(50);
    } else {
      setImageLimit(image.length);
    }
  }, [image]);

  if (error) return <div>{error}</div>;

  return (
    <motion.div
      className="mt-15"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
    >
      <h2 className="text-2xl font-semibold tracking-tight">Images</h2>
      {loading ? (
        <div className="mt-2">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2 pt-4">
          {image?.slice(0, showMore ? imageLimit : 12).map((img, index) => {
            return (
              <div key={index} className="relative">
                <img src={LARGE_POSTER_URL + img.file_path} alt={img.file_path} className="" />

                {/* More Image Overlay */}
                {imageLimit > 12 && index === 11 && !showMore && (
                  <div className="absolute w-full h-full inset-0 bg-black/80 flex items-center justify-center text-lg ">
                    {imageLimit - 12} more
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Show More Button */}
      <ShowMoreButton
        range="12"
        length={imageLimit}
        showMore={showMore}
        setShowMore={setShowMore}
      />
    </motion.div>
  );
};

export default ExploreMediaImages;
