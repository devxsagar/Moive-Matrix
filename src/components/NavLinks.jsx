import { NAV_LINKS } from "@/utils/constant";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const [linkClicked, setLinkClicked] = useState("Home");
  console.log(linkClicked);
  return (
    <div className="flex items-center max-lg:flex-col max-lg:text-3xl">
      {NAV_LINKS.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          className={`mx-4 max-lg:my-5 ${linkClicked === link.name && "text-red font-semibold"}`}
          onClick={() => setLinkClicked(link.name)}
        >
          {link.name}
        </Link> 
      ))}
    </div>
  );
};

export default NavLinks;
