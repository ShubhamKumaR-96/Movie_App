import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full h-[10vh] flex items-center relative ml-[15%]">
      <i class="ri-search-line text-zinc-500"></i>
      <input
        type="text"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        className="w-[50%] border-none outline-none text-zinc-300 text-xl mx-10 p-2 bg-transparent"
        placeholder="Search anything"
      />
      {query.length > 0 && <i onClick={()=>setQuery("")} class="ri-close-large-line text-zinc-500"></i>}

      <div className="absolute w-[50%] max-h-[50vh] bg-red-100 top-20 overflow-auto">
        {/* <Link className=" p-10 flex justify-start items-center border-b-2 border-zinc-400 text-zinc-600 font-semibold hover:text-zinc-900 hover:bg-zinc-300 duration-30000 ">
          <img src="" alt="" />
          <span>Hello everyone</span>
        </Link> */}

      </div>
    </div>
  );
};

export default TopNav;
