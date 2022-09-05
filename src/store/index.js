import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Netflix from "../pages/Netflix";
import { API_KEY, TMDB_BASE_URL } from "../utils/constant";

const initialState = {
    movies: [],
    generesLoaded: false,
    genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
    const { data:{genres} } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    console.log(genres);
    return genres
}); 

export const fetchMovies = createAsyncThunk("netflix/trending", async ({type}, thunkApi) => {
    const {netflix:NetflixSlice} = thunkApi.getState()
});

const NetflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => { 
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.generesLoaded = true;
        })
     },
});

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer,
    },
});