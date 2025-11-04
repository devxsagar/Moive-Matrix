import React from "react";
import SectionCarousel from "@/components/SectionCarousel";
import useRelatedMedia from "@/hooks/useRelatedMedia";

const ExploreSimilarMedia = ({ mediaType, id }) => {
    const { data, loading } = useRelatedMedia(mediaType, id, "similar");

  return (
    <div className="mt-15">
      <h2 className="text-2xl font-semibold tracking-tight mb-2">
        Similar {mediaType === "movie" ? "Movies" : "TV Series"}
      </h2>
      <SectionCarousel data={data} mediaType={mediaType} />
    </div>
  );
};

export default ExploreSimilarMedia;
