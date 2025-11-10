import React from "react";
import Banner from "@/components/Banner";
import useSectionFetch from "@/hooks/useSectionFetch";
import MediaSection from "@/sections/MediaSection";


const Movies = () => {
  const bannerData = useSectionFetch({ category: "now_playing", mediaType: "movie", page: 1 });

  return (
    <div>
      <Banner data={bannerData} mediaType="movie" />
      <div className="mt-[65vh] lg:mt-[95vh]">
        <MediaSection title="upcoming" category="upcoming" mediaType="movie" page={1} />
        <MediaSection title="popular" category="popular" mediaType="movie" page={1} />
        <MediaSection title="top rated" category="top_rated" mediaType="movie" page={1} />
      </div>
    </div>
  );
};

export default Movies;
