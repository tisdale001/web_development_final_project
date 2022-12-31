import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    addToShoppingCart, confirmTransaction,
    createEmptyShoppingCart, deleteFromShoppingCart,
    getShoppingCartById
} from "./shopping-cart-services";

export const getShoppingCartByIdThunk = createAsyncThunk(
    "cart/getCartById", async (userId) => {
        return await getShoppingCartById(userId);
    }
)

export const createEmptyShoppingCartThunk = createAsyncThunk(
    "cart/createEmpty", async (userId) => {
        return await createEmptyShoppingCart(userId);
    }
)

export const addToShoppingCartThunk = createAsyncThunk(
    "cart/addNewItem", async ({userId, listing}) => {
        return await addToShoppingCart({userId, listing});
    }
)

export const deleteFromShoppingCartThunk = createAsyncThunk(
    "cart/deleteItem", async ({userId, itemToDeleteId}) => {
        return await deleteFromShoppingCart({userId, itemToDeleteId});
    }
)

export const confirmTransactionThunk = createAsyncThunk(
    "cart/confirm", async (transaction) => {
        return await confirmTransaction(transaction)
    }
)