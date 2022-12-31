import axios from "axios";
const BASE_API_PATH = process.env.REACT_APP_APTS_API_BASE;

const API_CART_PATH = `${BASE_API_PATH}cart/`;
const api = axios.create({withCredentials: true});

export const createEmptyShoppingCart = async (userId) => {
    const result = await api.post(API_CART_PATH+"new/"+userId.toString());
    return result.data;
}

export const getShoppingCartById = async (userId) => {
    const result = await api.get(API_CART_PATH+userId)
    return result.data;
}

export const addToShoppingCart = async ({userId, listing}) => {
    const result = await api.post(API_CART_PATH+userId.toString(), listing);
    return result.data;
}

export const deleteFromShoppingCart = async ({userId, itemToDeleteId}) => {
    const result = await api.delete(API_CART_PATH+userId.toString()+"?delete="+itemToDeleteId.toString())
    return result.data;
}

export const confirmTransaction = async (transaction) => {
    const result = await api.post(API_CART_PATH+"confirm/"+transaction.owner,transaction);
    return result.data;
}
