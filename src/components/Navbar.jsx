import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Input } from "./ui/input";
import { IoSearch } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setMenuClicked((prev) => !prev);
    console.log("clicked");
  };

  return (
    <nav className="relative p-6 flex items-center justify-between border">
      <h1 className="text-2xl font-bold">Movie Matrix</h1>

      {/* Links for Desktop */}
      <div className="max-lg:hidden">
        <NavLinks />
      </div>

      {/* Search Bar and Profile Picture */}
      <div className="flex items-center gap-6">
        <div className="relative flex items-center max-md:hidden">
          <Input placeholder="Search movies..." className="pl-10" />
          <IoSearch className="absolute top-1/2 -translate-y-1/2 left-3" />
        </div>

        {/* Profile Picture */}
        <div className="max-lg:hidden">
          <Avatar>
            <AvatarImage
              src="https://i.pinimg.com/736x/9a/5f/f0/9a5ff060152ceb9b8c4b5596cf81878c.jpg"
              alt="pp"
              className="w-10 h-10 rounded-full border"
            />
            <AvatarFallback>Profile Picture</AvatarFallback>
          </Avatar>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div onClick={handleMenuClick}>
          <RxHamburgerMenu className="text-3xl" />
        </div>      
      </div>

      {/* Mobile Menu */}
      {menuClicked && (
        <div className="absolute top-20 left-0 w-full h-[92vh] bg-gray-800 p-6 flex flex-col items-center lg:hidden">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};
