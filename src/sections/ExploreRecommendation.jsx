import SectionCarousel from "@/components/SectionCarousel";
import useRelatedMedia from "@/hooks/useRelatedMedia";
import React from "react";

const ExploreRecommendation = ({mediaType, id}) => {
    const {data} = useRelatedMedia(mediaType, id, "recommendations");
  return (
    <div>
      <div className="mt-15">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">
          Recommendations
        </h2>
        <SectionCarousel data={data} mediaType={mediaType} />
      </div>
    </div>
  );
};

export default ExploreRecommendation;
