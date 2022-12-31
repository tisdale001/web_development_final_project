import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    createAlbumListing,
    getAlbums,
    findAllListingsById,
    getSingleListingById, getAlbumById, getRecentListings, deleteListing, editListing
} from "./discogs-service";


export const getAlbumsThunk = createAsyncThunk(
    "discogs/getalbums", async (album) => {
        return await getAlbums(album);
    }
)

export const getAlbumByIdThunk = createAsyncThunk(
    "discogs/getAlbumById", async ({album, id}) => {
        return await getAlbumById({album, id});
    }
)

export const findAllListingsThunk = createAsyncThunk(
    "discogs/getAlbumFromMongo", async (discogsId) => {
        return await findAllListingsById(discogsId);
    }
)

export const createAlbumListingThunk = createAsyncThunk(
    "discogs/createListingThunk", async (listing) => {
        return await createAlbumListing(listing);
    }
);

export const deleteListingThunk = createAsyncThunk(
    "discogs/deleteListing", async (id) => {
        return await deleteListing(id);
    }
)

export const editListingThunk = createAsyncThunk(
    "discogs/editListing", async (listing) => {
        return await editListing(listing);
    }
)

export const getSingleListingByIdThunk = createAsyncThunk(
    "discogs/getSingleListing", async (id) => {
        return await getSingleListingById(id);
    }
)

export const getRecentListingsThunk = createAsyncThunk(
    "discogs/getRecentListing", async () => {
        return await getRecentListings();
    }
)
