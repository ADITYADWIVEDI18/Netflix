import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        topRatedMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideos : (state,action) => {
            state.nowPlayingTrailer = action.payload;
        },
        addUpcomingMovies: (state, action) =>{
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies = action.payload;
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
    }
});

export const { addNowPlayingMovies, addTrailerVideos, addPopularMovies, addUpcomingMovies, addTopRatedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
