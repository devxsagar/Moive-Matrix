import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Input } from "./ui/input";
import { IoSearch } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setMenuClicked((prev) => !prev);
  };

  return (
    <nav className="relative py-5 lg:p-6 flex items-center justify-between rounded-3xl mt-5 backdrop-blur-lg">
      <h1 className="text-2xl font-bold">Movie Matrix</h1>

      {/* Links for Desktop */}
      <div className="max-lg:hidden">
        <NavLinks />
      </div>

      {/* Search Bar, Profile Picture (for Desktop) and Hamburger Menu(for Mobile) */}
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
        {menuClicked ? (
          <RxCross2
            onClick={() => setMenuClicked(false)}
            className="text-3xl lg:hidden relative z-10"
          />
        ) : (
          <RxHamburgerMenu onClick={handleMenuClick} className="text-3xl lg:hidden" />
        )}
      </div>

      {/* Mobile Menu */}
      {menuClicked && (
        <div className="absolute top-0 left-0 w-full h-screen z-8 bg-black p-6 pt-30 flex flex-col items-center lg:hidden">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};
