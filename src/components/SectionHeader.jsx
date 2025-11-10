import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SectionHeader = ({ title, mediaType, category }) => {
  const navigate = useNavigate();

  const handleViewAllButton = () => {
    navigate(`/explore/${mediaType}/${category}`);
    window.scrollTo(top, "smooth");
  };

  return (
    <motion.div className="flex items-center justify-between mb-3">
      <h3 className="uppercase tracking-wide text-lg md:text-xl  lg:text-2xl font-semibold">{title}</h3>
      <motion.p
        className="flex items-center gap-1 text-sm font-medium tracking-wide text-gray cursor-pointer hover:text-white hover-animation"
        onClick={handleViewAllButton}
        initial="initial"
        whileHover="hovered"
      >
        View all
        <motion.span
          variants={{ initial: { x: 0 }, hovered: { x: 2 } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className=" inline-block "
        >
          <ArrowRight className="w-5 h-5" />
        </motion.span>
      </motion.p>
    </motion.div>
  );
};

export default SectionHeader;
