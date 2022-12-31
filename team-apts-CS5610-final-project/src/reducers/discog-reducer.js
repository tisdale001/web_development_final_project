import {createSlice} from "@reduxjs/toolkit";
import {
    deleteListingThunk, editListingThunk,
    findAllListingsThunk,
    getAlbumByIdThunk,
    getAlbumsThunk, getRecentListingsThunk,
    getSingleListingByIdThunk
} from "../services/discogs-thunk";

const initialState = {
    discogsAlbumQuery: [],
    details: null,
    notFound: null,
    listings: [],
    suggested: []
}


const discogsSlice = createSlice({
    name: "discogs",
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducers: {
        clearListings(state,action) {
            state.discogsAlbumQuery = [];
    }
    },
    extraReducers: {
        [getAlbumsThunk.fulfilled]:
            (state, {payload}) => {
                const json = JSON.parse(JSON.stringify(payload));
                state.discogsAlbumQuery = json;
            },
        [findAllListingsThunk.fulfilled]:
            (state, {payload}) => {
                if (payload.length !==0 || state.listings.length !==0){
                    state.notFound = null;
                }
                state.listings = payload;
            },
        [getSingleListingByIdThunk.fulfilled]:
            (state, {payload}) => {
                state.details = payload;
            },
        [getRecentListingsThunk.fulfilled]:
            (state, {payload}) => {
                state.listings = payload;
            },
        [getAlbumByIdThunk.fulfilled]:
            (state, {payload}) => {
                console.log(payload);
                state.notFound = {
                    "discogs_id": payload.id,
                    "record_name": payload.title.split("-")[1].trim(),
                    "record_artist": payload.title.split("-")[0].trim(),
                    "record_genre": !payload.genre ? [] : payload.genre,
                    "record_year": !payload.year ? "N/A" : payload.year,
                    "record_image": !payload.thumb ? "N/A" : payload.thumb,
                };
            },
        [deleteListingThunk.fulfilled]:
            (state, {payload}) => {
                // Needs to be implemented that when a user deletes a listing it navigates them back to search res;
                console.log("Delete: " + payload.toString());
                const index = state.listings.findIndex((e) => e._id = payload._id);
                const leftSlice = state.listing.slice(0,index);
                const rightSlice = state.listing.slice(index+1);
                state.reviews = {...leftSlice, ...rightSlice};
            },
        [editListingThunk.fulfilled]:
            (state, {payload}) => {
                console.log("Edited: " + payload);
            },
        [getRecentListingsThunk.fulfilled]:
            (state, {payload}) => {
                state.suggested = payload;
            }
    }
});

export const {clearListings} = discogsSlice.actions;
export default discogsSlice.reducer;