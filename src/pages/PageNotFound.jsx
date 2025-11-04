import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6"
      style={{
        "--color-red": "#E50914",
        "--color-black": "#141414",
        "--color-gray": "#B3B3B3",
        "--color-white": "#ffffff",
      }}
    >
      <h1 className="text-[8rem] font-bold leading-none text-red">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-white">Oops! Page Not Found</h2>

      <p className="text-grey mt-3 max-w-md">
        The page you’re looking for doesn’t exist or has been moved. But don’t worry — let’s get you
        back on track.
      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-red text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-300"
      >
        Go Back Home
      </Link>   
    </div>
  );
};

export default PageNotFound;
