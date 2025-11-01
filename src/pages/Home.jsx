import Hero from "@/components/Hero";
import { API_OPTIONS } from "@/utils/constant";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [ trendingData, setTrendingData ] = useState(null);

  const getData = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      API_OPTIONS
    );
    const data = await fetchData.json();
    setTrendingData(data.results);
    console.log(data);
  };

 useEffect(() => {
    getData();
  }, []);

  return (
    <div >
      <Hero trendingData={trendingData} />
    </div>
  );
};

export default Home;
