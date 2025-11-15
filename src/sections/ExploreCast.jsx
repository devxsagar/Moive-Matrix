import React, { useState } from "react";
import { motion } from "framer-motion";
import { FALLBACK_PROFILE_PIC , SMALL_IMAGE_URL } from "@/utils/constant";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const ExploreCast = ({ cast }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    cast?.length > 0 && (
      <motion.div
        className="mt-15"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
      >
        <h2 className="text-2xl font-semibold tracking-tight">Cast</h2>
        {/* Cast List */}
        <div className="grid items-start grid-cols-3 md:grid-cols-6 lg:grid-cols-7  xl:grid-cols-9  gap-5 mt-2 ">
          {cast.length > 0 &&
            cast?.slice(0, showMore ? cast.length : 18)?.map((member) => {
              return (
                <div key={member?.id} className="pt-4">
                  <div className="flex flex-col items-center text-center">
                    <Avatar>
                      <AvatarImage
                        src={SMALL_IMAGE_URL + member?.profile_path}
                        alt={member?.name}
                        className="w-15 md:w-20 h-15 md:h-20 rounded-full object-cover object-top"
                      />
                      <AvatarFallback>
                        <img
                          src={FALLBACK_PROFILE_PIC}
                          alt="fallback"
                          className="w-15 md:w-20 h-15 md:h-20 rounded-full object-cover object-top"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xs md:text-sm mt-1 ">{member?.name}</p>
                      <p className="text-xs md:text-sm mt-0.5 text-gray">{member?.character}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Show More Button */}
        <div className="flex items-center justify-center mt-3">
          {cast.length > 18 && (
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="text-sm underline text-gray hover:text-red hover-animation cursor-pointer"
            >
              {!showMore ? "Show More" : "Show Less"}
            </button>
          )}
        </div>
      </motion.div>
    )
  );
};

export default ExploreCast;
