import axios from "axios";
// const API_REVIEWS_PATH = "http://localhost:2000/wishlist/"
// const BASE_API_PATH = "https://apts-server-backend.herokuapp.com/"
const BASE_API_PATH = process.env.REACT_APP_APTS_API_BASE;
const API_WISHLIST_PATH = `${BASE_API_PATH}wishlist/`;

const api = axios.create({withCredentials: true});

export const postToWishlist = async ({username, album}) => {
    const result = await api.post(API_WISHLIST_PATH+"add/"+username, album);
    return result.data;
}

export const createEmptyWishlist = async (username) => {
    const result = await api.post(API_WISHLIST_PATH+"create/"+username);
    return result.data;
}

export const getWishlistByUsername = async (username) => {
    const result = await api.get(API_WISHLIST_PATH+"get/"+username);
    return result.data;
}

export const deleteItemFromWishlist = async ({username, albumId}) => {
    const result = await api.delete(API_WISHLIST_PATH+"delete?id="+albumId.toString()+"&username="+username.toString());
    return {...result.data, discogs_id: albumId};
}