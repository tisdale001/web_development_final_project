import { createSlice } from "@reduxjs/toolkit";
import {
    addFollowerThunk,
    deleteFollowerThunk, getAllFollowedThunk,
    getAllFollowersThunk
} from "../services/following-thunk";
const initialState = {
    followingUsers : [],
    followedUsers: []
}

const followingSlice = createSlice({

    name: "following",
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    extraReducers: {
        [getAllFollowersThunk.fulfilled]:
            (state, {payload}) => {
                state.followedUsers = payload;
                console.log("GET ALL FOLLOWED USERS")
                console.log(state.followedUsers)
            },
        [addFollowerThunk.fulfilled]:
            (state, {payload}) => {
                console.log("ADDED A NEW FOLLOWER")
                state.followedUsers.push(payload);
                console.log(state.followedUsers);
            },
        [deleteFollowerThunk.fulfilled]:
            (state, {payload}) => {
                console.log("DELETED FOLLOWER")
                const index = state.followedUsers.findIndex((e) => e._id === payload._id);
                const leftSlice = state.followedUsers.slice(0,index);
                const rightSlice = state.followedUsers.slice(index+1);
                state.followedUsers = [...leftSlice, ...rightSlice];
                console.log(state.followedUsers)
            },
        [getAllFollowedThunk.fulfilled]:
            (state, {payload}) => {
                state.followedUsers = payload;
            }
    }
});

export default followingSlice.reducer;
