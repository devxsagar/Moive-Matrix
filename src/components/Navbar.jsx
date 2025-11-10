import React, { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLinks";
import { Input } from "./ui/input";
import { IoSearch } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { PROFILE_PIC_URL } from "@/utils/constant";
import SearchResult from "./SearchResult";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResultBox, setShowSearchResultBox] = useState(false);

  const inputRef = useRef(null);

  // Close search result box on click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowSearchResultBox(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [showSearchResultBox]);

  return (
    <nav className={`relative z-10 flex items-center justify-between rounded-full mt-5 `}>
      <Link to="/">
        <img src="/logo.png" alt="logo" className="h-4 sm:h-6" />
      </Link>

      {/* Links for Desktop */}
      <div className="max-lg:hidden">
        <NavLinks />
      </div>

      {/* Search Bar, Profile Picture (for Desktop) and Hamburger Menu(for Mobile) */}
      <div className="flex items-center gap-6">
        <div className="relative flex items-center">
          <Input
            ref={inputRef}
            placeholder="Search movies..."
            className="pl-10 w-45 max-sm:h-7 text-xs md:text-base sm:w-xs outline-none rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchResultBox(true)}
          />
          <IoSearch className="absolute top-1/2 -translate-y-1/2 left-4  md:left-3 max-sm:w-3 max-sm:h-3 " />

          <SearchResult
            inputRef={inputRef}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            showSearchResultBox={showSearchResultBox}
            setShowSearchResultBox={setShowSearchResultBox}
          />
        </div>

        {/* Profile Picture */}
        <div className="max-lg:hidden">
          <Avatar>
            <AvatarImage src={PROFILE_PIC_URL} alt="pp" className="w-10 h-10 rounded-full border" />
            <AvatarFallback>Profile Picture</AvatarFallback>
          </Avatar>
        </div>

        {/* Hamburger Menu for Mobile */}
        {menuClicked ? (
          <RxCross2
            onClick={() => setMenuClicked(false)}
            className="text-3xl lg:hidden relative z-10 cursor-pointer"
          />
        ) : (
          <RxHamburgerMenu
            size={18}
            onClick={() => setMenuClicked(true)}
            className="text-3xl lg:hidden cursor-pointer"
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menuClicked && (
        <div className="fixed top-0 left-0 w-screen h-screen z-8 bg-black p-6 pt-30 flex flex-col items-center lg:hidden">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};
