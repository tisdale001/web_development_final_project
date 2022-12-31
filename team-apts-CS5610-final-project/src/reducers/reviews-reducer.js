import { createSlice } from "@reduxjs/toolkit";
import {
    createReviewThunk,
    deleteReviewByIdThunk,
    getAllReviewsByAlbumIdThunk,
    getAllReviewsByUsernameThunk
} from "../services/review-thunk";

const initialState = {
    reviews: []
}

const reviewSlice = createSlice({
    name: "reviews",
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    extraReducers: {
        [getAllReviewsByUsernameThunk.fulfilled]:
            (state, {payload}) => {
                state.reviews = payload;

            },
        [getAllReviewsByAlbumIdThunk.fulfilled]:
            (state, {payload}) => {
                state.reviews = payload;
            },
        [createReviewThunk.fulfilled] :
        (state, {payload}) => {
            state.reviews.push(payload);
        },
        [deleteReviewByIdThunk.fulfilled]:
            (state, {payload})=> {
                const index = state.reviews.findIndex((e) => e._id === payload._id);
                const leftSlice = state.reviews.slice(0,index);
                const rightSlice = state.reviews.slice(index+1);
                state.reviews = [...leftSlice, ...rightSlice];
            }
    }
});

export default reviewSlice.reducer;
