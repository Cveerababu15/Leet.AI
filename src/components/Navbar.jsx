import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 text-white w-full h-[10vh] flex justify-between items-center px-6 shadow-md relative">
     <Link to="/"><h2 className="text-3xl font-extrabold text-orange-400">LEET-AI</h2></Link>

        <ul className="hidden md:flex gap-x-6 font-semibold">
        <Link to="/Getstart"><li className="hover:text-orange-400 cursor-pointer">Get Started</li></Link>
       <Link to="/about"><li className="hover:text-orange-400 cursor-pointer">About</li></Link>
       <Link to="/learn"><li className="hover:text-orange-400 cursor-pointer">Learn More</li></Link>
        <Link to="/Guide"><li className="hover:text-orange-400 cursor-pointer">Guide</li></Link>
        </ul>

        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </nav>

      {open && (
        <ul className="md:hidden bg-gray-800 text-white flex flex-col items-center space-y-4 py-6 absolute top-[10vh] left-0 w-full z-50 transition-all duration-300">
          <Link to="/Getstart"><li
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Get Started
          </li>
          </Link>
          <Link to="/about"><li
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            About
          </li></Link>

        <Link to="/learn">
        <li
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Learn More
          </li></Link>

          <Link to="/Guide">
          <li
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Guide
          </li></Link>
        </ul>
      )}
    </>
  );
}
