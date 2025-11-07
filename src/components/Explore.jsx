import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbNavigation from "./BreadCrumbNavigation";

import useSectionFetch from "@/hooks/useSectionFetch";
import PosterCard from "./PosterCard";
import PaginationBar from "./PaginationBar";
import ExploreSkeleton from "./skeleton/ExploreSkeleton";

const Explore = () => {
  const { mediaType, category } = useParams();
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  // Fetch data using custom hook
  const res = useSectionFetch({ category, mediaType, page });

  // Update data state when res changes
  useEffect(() => {
    setData(res);
  }, [res]);

  if (!data) {
    return <ExploreSkeleton />
  }


  return (
    <section className="px-4 py-10">
      {/* Breadcrumb */}
      <BreadCrumbNavigation mediaType={mediaType} category={category} />

      {/* Content */}
      <div className="mt-8 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-15 place-items-center">
          {data.map((item) => {
            return (
              <PosterCard
                key={item.id}
                posterPath={item.poster_path}
                movieTitle={item.title}
                movieName={item.name}
                id={item.id}
                mediaType={mediaType}
                releaseDate={item.release_date || item.first_air_date}
                rating={item.vote_average}
              />
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      <div>
       <PaginationBar page={page} setPage={setPage} />
      </div>
    </section>
  );
};

export default Explore;
