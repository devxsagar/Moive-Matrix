import React from "react";

const ShowMoreButton = ({length, range, showMore, setShowMore}) => {
  return (
    <div className="flex items-center justify-center mt-3">
      {length > range && (
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="text-sm underline text-gray hover:text-red hover-animation cursor-pointer"
        >
          {!showMore ? "Show More" : "Show Less"}
        </button>
      )}
    </div>
  );
};

export default ShowMoreButton;
