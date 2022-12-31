import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../services/users-thunks";
import { Navigate} from "react-router";
import {clearWishlist} from "../reducers/wishlist-reducer";

const Logout = () => {
    const dispath = useDispatch();
    const {currentUser, error} = useSelector((state) => state.users)
    useEffect(() => {
        dispath(clearWishlist())
        dispath(logoutThunk());
      });
      if (!error && !currentUser) {
        return (<Navigate to="/home" />);
      }
    return (
        <>
             <p>Logging the user: {currentUser.username} out of this site.....</p> 
        </>
    )
}
export default Logout;