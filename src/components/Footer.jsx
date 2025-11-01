import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex max-lg:flex-col-reverse items-center justify-between py-6 text-center text-sm text-gray border-t border-gray-800">
      <div className="flex max-lg:flex-col-reverse items-center">
        <p>© {new Date().getFullYear()} Movie Matrix. All rights reserved.</p>
        <span className="mx-2 max-lg:hidden">•</span>
        <p className="max-lg:mb-2">Developed by Sagar</p>
      </div>

      <div className="flex items-center space-x-4 max-lg:mb-4">
        <Link>
          <FaGithub className="w-4 h-4 lg:w-5 lg:h-5 "/>
        </Link>
        <Link>
          <FaLinkedinIn className="w-4 h-4 lg:w-5 lg:h-5"/>
        </Link>
        <Link>
          <FaXTwitter className="w-4 h-4 lg:w-5 lg:h-5"/>
        </Link>
      </div>    
    </footer>
  );
};

export default Footer;
