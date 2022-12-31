import axios from "axios";

const BASE_API_PATH = process.env.REACT_APP_APTS_API_BASE;
// const BASE_API_PATH = "https://apts-server-backend.herokuapp.com/"
const API_LISTINGS_PATH = `${BASE_API_PATH}users/`;

const api = axios.create({withCredentials: true});

export const getAllOpenApprovals = async () => {
    const result = await api.get(API_LISTINGS_PATH+"approvals")
    return result.data;
}

export const closeApproval = async ({user, decision}) => {
    const result = await api.put(API_LISTINGS_PATH+"approvals/close?decision="+decision+"&username="+user.username);
    return result.data;
}