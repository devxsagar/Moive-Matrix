import React from "react";
import useSectionFetch from "@/hooks/useSectionFetch";
import SectionHeader from "@/components/SectionHeader";
import SectionCarousel from "@/components/SectionCarousel";
import MediaSectionSkeleton from "@/components/skeleton/MediaSectionSkeleton";
import { motion } from "framer-motion";

const MediaSection = ({ title, category, mediaType, page = 1 }) => {
  // Fetch  data
  const data = useSectionFetch({ category, mediaType, page });

  return !data ? (
    <MediaSectionSkeleton />
  ) : (
    <motion.div
      className="pt-10 mb-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
    >
      {/* Header */}
      <SectionHeader title={title} category={category} mediaType={mediaType} />

      {/* Carousel */}
      <SectionCarousel data={data} mediaType={mediaType} />
    </motion.div>
  );
};

export default MediaSection;
