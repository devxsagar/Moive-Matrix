import Banner from "@/components/Banner";
import useSectionFetch from "@/hooks/useSectionFetch";
import MediaSection from "@/sections/MediaSection";
import React, { use } from "react";

const Movies = () => {
  const bannerData = useSectionFetch({ category: "now_playing", mediaType: "movie", page: 1 });

  return (
    <div>
      <Banner data={bannerData}/>
      <div className="mt-[65vh] lg:mt-[95vh]">
        <MediaSection title="popular" category="popular" mediaType="movie" page={1} />
      </div>
    </div>
  );
};

export default Movies;
