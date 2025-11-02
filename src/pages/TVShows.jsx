import Banner from "@/components/Banner";
import useSectionFetch from "@/hooks/useSectionFetch";
import MediaSection from "@/sections/MediaSection";
import React from "react";

const TVShows = () => {
  const bannerData = useSectionFetch({ category: "on_the_air", mediaType: "tv" });
  return (
    <div>
      <Banner data={bannerData} />
      <div className="mt-[65vh] lg:mt-[95vh]">
        <MediaSection title="airing today" category="airing_today" mediaType="tv" />
        <MediaSection title="popular" category="popular" mediaType="tv" />
        <MediaSection title="top rated" category="top_rated" mediaType="tv" />
      </div>
    </div>
  );
};

export default TVShows;
