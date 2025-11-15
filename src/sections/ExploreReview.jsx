import React, { useState } from "react";
import ReviewCard from "@/components/ReviewCard";
import useReviews from "@/hooks/useReviews";
import { motion } from "framer-motion";

const ExploreReview = ({ mediaType, id }) => {
  const [showMore, setShowMore] = useState(false);

  const { reviews, loading } = useReviews(mediaType, id);

  return (
    reviews.length > 0 && (
      <motion.div
        className="mt-15"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
      >
        <h2 className="text-2xl font-semibold tracking-tight mb-2">Reviews</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 place-items-start">
          {reviews?.slice(0, showMore ? reviews.length : 3).map((review) => {
            return (
              <ReviewCard
                key={review.id}
                avatarUrl={review.author_details.avatar_path}
                username={review.author_details.username}
                name={review.author_details.name || review.author}
                review={review.content}
                rating={review.author_details.rating}
              />
            );
          })}
        </div>

        {reviews.length > 3 && (
          <div className="flex items-center justify-center mt-2">
            <button
              className="text-xs text-muted-foreground underline cursor-pointer hover:text-white  hover-animation"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "see less reviews" : "see more reviews"}
            </button>
          </div>
        )}
      </motion.div>
    )
  );
};

export default ExploreReview;
