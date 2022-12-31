import {createAsyncThunk} from "@reduxjs/toolkit";
import {createEmptyWishlist, postToWishlist, deleteItemFromWishlist, getWishlistByUsername} from "./wishlist-service";

export const createEmptyWishlistThunk = createAsyncThunk(
    "/wishlist/createEmptyWishlist", async (username) =>
        await createEmptyWishlist(username)
);

// Example query
// dispatch(postToWishlistThunk({username: "Chris", album:{
//             "discogs_id" : 3,
//             "record_name": "Rock out",
//             "record_artist" :"cba",
//             "record_genre": ["abc123"],
//             "record_price": 24,
//             "record_quantity": 4,
//             "record_image": "ewerwer.png",
//             "record_vendor": "Vendor2"
//         }}));
export const postToWishlistThunk = createAsyncThunk(
    "/wishlist/postToWishlist", async ({username, album}) =>
        await postToWishlist({username, album})
)


// Example query: {username: "Chris", albumId: 2}
export const deleteItemFromWishlistThunk = createAsyncThunk(
    "/wishlist/delete", async ({username, albumId}) => await deleteItemFromWishlist({username, albumId})
)

export const getWishlistByUsernameThunk = createAsyncThunk(
    "/wishlist/get", async (username) => {
        return await getWishlistByUsername(username);
    }
)
