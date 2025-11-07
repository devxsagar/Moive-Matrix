import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const PosterCardSkeleton = () => {
  return (
    <div className="flex flex-col">
      {/* Poster */}
      <Skeleton className="h-50  rounded-lg" />

      {/* Title */}
      <Skeleton className="h-4 w-24 mt-2 rounded" />

      {/* Release year + rating */}
      <div className="flex justify-between items-center mt-2">
        <Skeleton className="h-3 w-10 rounded" />
        <Skeleton className="h-3 w-14 rounded" />
      </div>
    </div>
  );
};

export default PosterCardSkeleton;  
