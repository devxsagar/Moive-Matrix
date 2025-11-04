import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "@/utils/constant";
import useGetMediaDetails from "@/hooks/useGetMediaDetails";
import ExploreMediaInfo from "@/components/ExploreMediaInfo";
import useMediaCredits from "@/hooks/useMediaCredits";
import ExploreCast from "@/components/ExploreCast";
import ExploreMediaImages from "@/components/ExploreMediaImages";

const Details = () => {
  // Get details from explore and section carousel
  const { mediaType, title, id } = useParams();

  const mediaDetails = useGetMediaDetails(mediaType, id);
  const { directors, cast } = useMediaCredits(mediaType, id);

  if (!mediaDetails || !directors || !cast) {
    return <div>Loading...</div>;
  }


  return (
    <section className="pt-10 pb-20">
      {/* movie details */}
      <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-y-10 lg:gap-x-5 xl:gap-x-15  ">
        {/* Movie or Series Poster */}
        <div className=" lg:w-[40%]">
          <img
            src={IMAGE_URL + mediaDetails?.poster_path}
            alt={mediaDetails?.title || mediaDetails?.name}
            loading="lazy"
            decoding="async"
            className="min-h-[35rem] max-h-[35rem] object-cover rounded-lg"
          />
        </div>

        {/* Movie or Series Information */}
        <ExploreMediaInfo mediaDetails={mediaDetails} directors={directors} cast={cast} />
      </div>

      <ExploreCast cast={cast} />

      <ExploreMediaImages mediaType={mediaType} id={id} />
    </section>
  );
};

export default Details;
