import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // Access the trailerId directly from the Redux store
  const trailerId = useSelector((store) => store.movies?.nowPlayingTrailer);
  
  // Hooks for fetching the trailer.
  useMovieTrailer(movieId);

  return (
    <div className="">
      {trailerId ? (
        <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1&picture-in-picture=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      ) : (
        <p className="text-purple-600 font-bold text-3xl">Loading trailer...</p> // Optional loading state
      )}
    </div>
  );
};

export default VideoBackground;
