import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SMALL_IMAGE_URL } from "@/utils/constant";
import { ChevronDown, ChevronUp, Star } from "lucide-react";


const ReviewCard = ({ avatarUrl, username, name, review, rating }) => {
  const [showMore, setShowMore] = useState(false);
  
  return (
    <Card className="max-w-sm w-full bg-neutral-900/80 backdrop-blur border border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-1">
        <div className="flex items-center justify-between gap-3 ">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-neutral-800">
              {avatarUrl && (
                <AvatarImage src={SMALL_IMAGE_URL + avatarUrl} alt={`${name}'s profile picture`} />
              )}
              <AvatarFallback>{name?.slice(0, 2)?.toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold leading-tight">{name}</span>
              <span className="text-xs text-muted-foreground leading-tight lowercase">
                {username}
              </span>
            </div>
          </div>
          {rating && (
            <div className="flex items-center gap-1">
              <Star fill="#facc15" color="#facc15" className="w-4 h-4" />
              <span className="text-gray">{rating}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p
          className={`text-xs md:text-sm leading-relaxed text-neutral-200 ${showMore ? "" : "line-clamp-3"} `}
        >
          {review}
        </p>
        {review.length > 100 && (
          <div>
            <button
              className="text-xs text-sky-600 hover:underline uppercase cursor-pointer hover:text-sky-400  hover-animation flex items-center gap-1"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "less" : "more"}
              {showMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
