import React from "react";
import MediaSection from "@/sections/MediaSection";
import useSectionFetch from "@/hooks/useSectionFetch";
import Banner from "@/components/Banner";

const Home = () => {
  const trendingData = useSectionFetch({ category: "trending", mediaType: "all" });

  return (
    <div>
      <Banner data={trendingData} />
      <div className="mt-[65vh] lg:mt-[95vh]">
        <MediaSection title="trending movies" category="trending" mediaType="movie" />
        <MediaSection title="popular movies" category="popular" mediaType="movie" />
        <MediaSection title="trending tv series" category="trending" mediaType="tv" />
        <MediaSection title="top rated tv series" category="top_rated" mediaType="tv" />
      </div>
    </div>
  );
};

export default Home;
