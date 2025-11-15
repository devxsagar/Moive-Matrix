import React from "react";
import { Skeleton } from "../ui/skeleton";
import MediaSectionSkeleton from "./MediaSectionSkeleton";
// import MediaSectionSkeleton from "./MediaSectionSkeleton";

const HomeSkeleton = () => {
  return (
    <div className="w-full mx-auto h-[70vh] lg:h-screen overflow-hidden">
      {/* Hero Image Skeleton */}
      <Skeleton className="w-full h-full rounded-none" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black" />

      {/* Gradient Bottom */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black" /> */}

      {/* Text Content Skeleton */}
      <div className="max-w-4xl absolute left-0 top-1/3 md:left-25 md:bottom-20 xl:left-40 xl:top-1/2 xl:-translate-y-1/2 z-20 p-5">
        {/* Title */}
        <Skeleton className="h-8 md:h-12 lg:h-16 w-3/4 rounded-md" />

        {/* Overview lines */}
        <div className="space-y-2 mt-5">
          <Skeleton className="h-3 md:h-4 w-full rounded-md" />
          <Skeleton className="h-3 md:h-4 w-5/6 rounded-md" />
          <Skeleton className="h-3 md:h-4 w-2/3 rounded-md" />
        </div>

        {/* Stars + rating */}
        <div className="flex items-center gap-6 mt-4">
          {/* Star icons skeleton */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="w-6 h-6 rounded-md" />
            ))}
          </div>

          {/* Rating text */}
          <Skeleton className="h-4 w-20 rounded-md" />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <Skeleton className="h-12 md:h-14 lg:h-16 w-32 md:w-40 lg:w-48 rounded-full" />
          <Skeleton className="h-12 md:h-14 lg:h-16 w-32 md:w-40 lg:w-48 rounded-full" />
        </div>
      </div>

      <div className="relative z-60">
        <MediaSectionSkeleton />
      </div>
    </div>
  );
};

export default HomeSkeleton;
