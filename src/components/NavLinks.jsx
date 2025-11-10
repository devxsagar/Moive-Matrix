import { NAV_LINKS } from "@/utils/constant";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavLinks = () => {

  return (
    <div className="flex items-center max-lg:flex-col max-lg:text-3xl">
      {NAV_LINKS.map((link, index) => (
        <NavLink
          key={index}
          to={link.href}
          className={({ isActive }) =>
            `mx-4 max-lg:my-5 ${isActive ? "text-red-500 font-semibold" : "text-gray-300"}`
          }
          onClick={() => setLinkClicked(link.name)}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
