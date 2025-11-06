import React, { useEffect } from "react";
import useGetTrailer from "@/hooks/useGetTrailer";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const Trailer = ({ mediaType, id, setShowTrailer, name }) => {
  const { data, loading } = useGetTrailer(mediaType, id);

  // Close trailer on Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowTrailer(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [setShowTrailer]);

  return (
    <div className="fixed z-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-7xl h-[50vh] lg:h-[80vh]">
      {/* Close Button */}
      <div className="flex justify-end mb-2">
        <motion.button
          className="cursor-pointer"
          onClick={() => setShowTrailer(false)}
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 180, transition: { duration: 0.3, ease: "easeInOut" } }}
          whileTap={{ scale: 0.9 }}
        >
          <X />
        </motion.button>
      </div>

      {/* Video */}
      <div className=" backdrop-blur-md rounded-xl px-5 py-3 h-[95%]  ">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="h-full max-lg:flex flex-col justify-center">
            <h2 className="text-lg md:text-xl lg:text-4xl font-semibold mb-5">{name} Trailer</h2>
            <div className="flex items-center justify-center lg:h-[90%] ">
              <iframe
                className="w-fit sm:w-xl md:w-2xl lg:w-[80%] h-fit sm:h-80 md:h-90 lg:h-8/12 xl:h-[93%]"
                src={`https://www.youtube.com/embed/${data?.key}?autoplay=1&mute=1&loop=1&playlist=${data?.key}&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trailer;
