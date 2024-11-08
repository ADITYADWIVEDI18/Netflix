import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";

import { API_OPTIONS } from "../constant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
      // Make api call to gpt api and get movie result.

      const gptQuery =
      "Act as a Movie Recommnedation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery}],
        model: 'gpt-3.5-turbo',
      });

       if (!gptResults.choices) {
      // TODO Error Handling
    }
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
  
      //  For each Movie I will search from TMDB API
  
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
  
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
  
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );

  }
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12 rounded-sm space-x-3 p-2 bg-black"
        onClick={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-3 col-span-9 text-sm"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-red-600 col-span-3 rounded-sm text-normal font-semibold hover:bg-red-500 text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
