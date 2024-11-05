import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toggleShowGptSearch: (state) => {  // Updated function name
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) =>{
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});

export const { toggleShowGptSearch, addGptMovieResult } = gptSlice.actions;  // Updated export name
export default gptSlice.reducer;
