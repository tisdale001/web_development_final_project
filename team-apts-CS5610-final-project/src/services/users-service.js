import axios from "axios";
// const BASE_URL = 'http://localhost:2000';

// const BASE_URL= "https://apts-server-backend.herokuapp.com/"
const BASE_URL = process.env.REACT_APP_APTS_API_BASE;
// const API_BASE = process.env.REACT_APP_API_BASE;

const api = axios.create({withCredentials: true});

export const findAllUsers = async() => {
    const response = await api.get(`${BASE_URL}users`)
    return response.data;
}

export const register = async(user) => {
    const response = await api.post(`${BASE_URL}register`, user)
    return response.data;
}

export const login = async(user) => {
    const response = await api.post(`${BASE_URL}login`, user)
    return response.data;
}

export const logout = async(user) => {
    const response = await api.post(`${BASE_URL}logout`, user)
    return response.data;
}

export const findUser = async() => {
    const response = await api.get(`${BASE_URL}api/profile`);
    return response.data;
}

export const findUserByUsername = async(username) => {
    const response = await api.get(`${BASE_URL}api/profile/${username}`);
    return response.data;
}

export const findCurrentUser = async () => {
    const response = await api.get(`${BASE_URL}api/profile`);
    return response.data;
}

export const updateUser = async(userUpdates) => {
    const response = await api.put(`${BASE_URL}users/${userUpdates.username}`, {...userUpdates});
    return response.data;
}