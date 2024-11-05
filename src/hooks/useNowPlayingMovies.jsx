import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../constant';
import { useEffect } from 'react';
 export const useNowPlayingMovies = () => {
  // Fetch Data from TMDB Api and update stored movies
  const dispatch = useDispatch();

  const getNowPlaying = async () => {

      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
  };
  
  useEffect( ()=>{
    getNowPlaying();
  } ,[]);
}

