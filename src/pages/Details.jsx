import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { LARGE_POSTER_URL } from "@/utils/constant";
import useGetMediaDetails from "@/hooks/useGetMediaDetails";
import ExploreMediaInfo from "@/components/ExploreMediaInfo";
import useMediaCredits from "@/hooks/useMediaCredits";
import ExploreCast from "@/sections/ExploreCast";
import ExploreMediaImages from "@/sections/ExploreMediaImages";
import ExploreSimilarMedia from "@/sections/ExploreSimilarMedia";
import ExploreRecommendation from "@/sections/ExploreRecommendation";
import DetailsSkeleton from "@/components/skeleton/DetailsSkeleton";
import ExploreReview from "@/sections/ExploreReview";

const Details = () => {
  // Get details from explore and section carousel
  const { mediaType, title, id } = useParams();

  const { data: mediaDetails, loading } = useGetMediaDetails(mediaType, id);
  const { directors, cast } = useMediaCredits(mediaType, id);

  return loading || !directors || !cast ? (
    <DetailsSkeleton />
  ) : (
    <section className="pt-10 pb-20">
      {/* movie details */}
      <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-y-10 lg:gap-x-5 xl:gap-x-15  ">
        {/* Movie or Series Poster */}
        <motion.div
          className=" lg:w-[40%]"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <img
            src={LARGE_POSTER_URL + mediaDetails?.poster_path}
            alt={mediaDetails?.title || mediaDetails?.name}
            loading="lazy"
            decoding="async"
            className="min-h-[35rem] max-h-[35rem] object-cover rounded-lg"
          />
        </motion.div>

        {/* Movie or Series Information */}
        <ExploreMediaInfo
          mediaDetails={mediaDetails}
          directors={directors}
          cast={cast}
          mediaType={mediaType}
          id={id}
        />
      </div>

      <ExploreCast cast={cast} />

      <ExploreMediaImages mediaType={mediaType} id={id} />

      <ExploreSimilarMedia mediaType={mediaType} id={id} />

      <ExploreRecommendation mediaType={mediaType} id={id} />

      <ExploreReview mediaType={mediaType} id={id} />
    </section>
  );
};

export default Details;
