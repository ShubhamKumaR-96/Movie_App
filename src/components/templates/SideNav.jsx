import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-8">
      <h1 className="text-2xl text-white font-bold">
        <i class="text-[#6556CD] ri-tv-line mr-3 "></i>
        <span className="text-2xl">Shubh_APP</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-xl text-white font-semibold mt-5 ">New Feeds</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-fire-fill"></i> Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-bard-line"></i> Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-movie-2-line"></i> Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-tv-fill"></i> TV-Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-team-fill"></i> People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-2">
        <h1 className="text-xl text-white font-semibold mt-5 ">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
        <i class="mr-2 ri-information-line"></i> About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
        <i class="ri-phone-fill"></i> Contact
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
