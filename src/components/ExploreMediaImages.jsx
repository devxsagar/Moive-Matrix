import useGetMediaImage from "@/hooks/useGetMediaImage";
import { IMAGE_URL } from "@/utils/constant";
import React, { useEffect, useState } from "react";
import ShowMoreButton from "./ShowMoreButton";

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
    <div className="mt-15">
      <h2 className="text-2xl font-semibold tracking-tight">Images</h2>
      {loading ? (
        <div className="mt-2">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
          {image?.slice(0, showMore ? imageLimit : 12).map((img, index) => {
            return (
              <div key={index} className="relative">
                <img src={IMAGE_URL + img.file_path} alt={img.file_path} className="" />

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
    </div>
  );
};

export default ExploreMediaImages;
