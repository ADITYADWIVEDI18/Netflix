import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  
  const movie = useSelector((store)=>store.movies?.nowPlayingMovies);
  if(!movie)return;
  const mainMovie = movie[8];

  const { original_title, overview, id }=mainMovie;
   
  return (
    <div className='h-full w-full'>
        <VideoTitle title={original_title} overview={overview} movieId={id} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer