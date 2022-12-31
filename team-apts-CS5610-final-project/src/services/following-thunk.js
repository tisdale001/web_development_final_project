import {createAsyncThunk} from "@reduxjs/toolkit";
import {addFollower, deleteFollower, getAllFollowed, getAllFollowers} from "./following-service";

export const getAllFollowersThunk = createAsyncThunk(
    "follow/getFollowers", async (id) => {
        return await getAllFollowers(id);
    }
)

export const getAllFollowedThunk = createAsyncThunk(
    "follow/getFollowed", async (id) => {
        return await getAllFollowed(id)
})

export const addFollowerThunk = createAsyncThunk(
    "follow/addFollower", async (userIds) => {
        return await addFollower(userIds);
    }
)

export const deleteFollowerThunk = createAsyncThunk(
    "follow/deleteFollower", async (followingId) => {
        return await deleteFollower(followingId);
    }
)