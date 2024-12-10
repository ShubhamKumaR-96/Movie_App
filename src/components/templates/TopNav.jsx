import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noImage from '../../../public/no-image.jpg';

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    if (query.trim() === "") {
      setSearches([]);
      return;
    }
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error while fetching searches", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] flex items-center relative ml-[15%]">
      <i className="ri-search-line text-zinc-500"></i>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[50%] border-none outline-none text-zinc-300 text-xl mx-10 p-2 bg-transparent"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-large-line text-zinc-500"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-red-100 top-20 overflow-auto">
        {searches.map((s, i) => (
          <Link
            key={i}
            to={`/details/${s.id}`}  // Add the link destination
            className="p-10 flex justify-start items-center border-b-2 border-zinc-400 text-zinc-600 font-semibold hover:text-zinc-900 hover:bg-zinc-300 duration-300"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5"
              src={s.backdrop_path || s.profile_path 
                ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` 
                : noImage}
              alt=""
            />
            <span>
              {s.title || s.name || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
