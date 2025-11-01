import React from "react";
import { ArrowRight } from "lucide-react";

const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center justify-between mb-5">
      <h3 className="uppercase tracking-wide  text-2xl font-semibold">{title}</h3>
      <p className="flex items-center gap-2 text-sm font-medium tracking-wide text-gray cursor-pointer hover:text-white hover-animation">
        View all
        <ArrowRight className="w-5 h-5" />
      </p>
    </div>
  );
};

export default SectionHeader;
