import React, { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLinks";
import { Input } from "./ui/input";
import { IoSearch } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { PROFILE_PIC_URL } from "@/utils/constant";
import SearchResult from "./SearchResult";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showSearchResultBox, setShowSearchResultBox] = useState(false);

  const searchBoxRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showSearchBox && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearchBox]);

  // Close search result box on click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setShowSearchBox(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [showSearchBox]);

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
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {!showSearchBox && (
            <IoSearch className="w-5 h-5 cursor-pointer" onClick={() => setShowSearchBox(true)} />
          )}
        </motion.div>

        {/* Pop Up Search Box */}
        {showSearchBox && (
          <motion.div
            ref={searchBoxRef}
            className="fixed top-1/5 md:top-1/5 xl:top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/6 md:-translate-y-1/5 xl:-translate-y-1/5 z-50 w-[70vw]  xl:w-[40vw] max-h-[50vh] lg:max-h-[60vh] xl:max-h-[70vh] backdrop-blur-3xl px-5 py-5 rounded-2xl flex flex-col gap-y-5 items-center justify-start overflow-y-scroll scrollbar-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative w-full">
              <Input
                ref={inputRef}
                placeholder="Search movies..."
                className="pl-10 bg-white/70! text-black  text-xs md:text-base w-full outline-none rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSearchResultBox(true)}
              />

              <IoSearch
                color="black"
                className="absolute top-1/2 -translate-y-1/2 left-4  md:left-3 max-sm:w-3 max-sm:h-3 "
              />
            </div>
            <SearchResult
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              showSearchResultBox={showSearchResultBox}
              setShowSearchBox={setShowSearchBox}
            />
          </motion.div>
        )}

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
