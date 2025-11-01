import Hero from "@/components/Hero";
import { API_OPTIONS } from "@/utils/constant";
import React, { useEffect, useState } from "react";
import Details from "./Details";
import MediaSection from "@/sections/MediaSection";


const Home = () => {
  const [trendingData, setTrendingData] = useState(null);

  const getData = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      API_OPTIONS
    );
    const data = await fetchData.json();
    setTrendingData(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Hero data={trendingData} />
      <MediaSection title="trending movies" category="trending" mediaType="movie" />
      <MediaSection title="trending tv series" category="trending" mediaType="tv" />
    </div>
  );
};

export default Home;
