import React from "react";
import { Skeleton } from "../ui/skeleton";

const SearchResultCardSkeleton = () => {
  return (
    <div className="space-y-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-center gap-x-4 bg-white rounded-lg p-2">
          {/* Poster Image */}
          <Skeleton className="h-20 w-14 rounded-lg" />

          {/* Title */}
          <Skeleton className="h-4 w-32 rounded" />
        </div>
      ))}
    </div>
  );
};

export default SearchResultCardSkeleton;
