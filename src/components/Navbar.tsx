import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex rounded py-5 backdrop-blur-3xl px-10 justify-between shadow-xl">
      <a href="https://renora.io/" className="flex items-center">
        <img src="/logo.png" alt="Renora Technologies" className="w-[35px]" />
        <div className="ml-2 tracking-wide">
          <h2 className="mb-[-5px]">Renora</h2>
          <h2>Technologies</h2>
        </div>
      </a>
      <div className="rounded-xl max-w-[700px] w-[100%] flex p-2 bg-[#131823] items-center">
        <CiSearch className="text-[30px]" />
        <input
          placeholder="Search Assets"
          className="ml-5 bg-[#131823] outline-0 w-[100%] text-[20px]"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
