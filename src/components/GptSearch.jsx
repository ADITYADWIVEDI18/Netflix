import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Sign_background } from "../constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="max-md:h-screen max-xl:h-screen object-cover"
          src={Sign_background}
          alt="header"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
