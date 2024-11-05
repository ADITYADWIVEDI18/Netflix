import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constant";
import { addTrailerVideos } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  // Fetch trailer and update the store
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.nowPlayingTrailer);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();

      // Filter for trailer videos and get the first match if available
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      // Store trailer ID (YouTube video key) in Redux
      dispatch(addTrailerVideos(trailer.key));
    } catch (error) {
      console.error("Failed to fetch movie videos:", error);
    }
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
