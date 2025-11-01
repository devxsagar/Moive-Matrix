import Banner from "@/components/Banner";
import useSectionFetch from "@/hooks/useSectionFetch";
import React, { use } from "react";

const TVShows = () => {
    const bannerData = useSectionFetch({ category: "on_the_air", mediaType: "tv" });
  return <div>
    <Banner data={bannerData} />
  </div>;
};

export default TVShows;
