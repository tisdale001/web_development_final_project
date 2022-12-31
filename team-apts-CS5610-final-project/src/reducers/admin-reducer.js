import { createSlice } from "@reduxjs/toolkit";
import {closeApprovalThunk, getAllOpenApprovalsThunk} from "../services/admin-thunk";

const initialState = {
    openApprovals : [],
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    extraReducers: {
        [getAllOpenApprovalsThunk.fulfilled] :
            (state, {payload}) => {
                state.openApprovals = payload;
                console.log(state.openApprovals);
            },
        [closeApprovalThunk.fulfilled] :
            (state, {payload}) => {
                const index = state.openApprovals.findIndex((e) => e.username === payload.username);
                const leftSlice = state.openApprovals.slice(0,index);
                const rightSlice = state.openApprovals.slice(index+1);
                state.openApprovals = [...leftSlice, ...rightSlice];
            }
    }
});

export default adminSlice.reducer;
