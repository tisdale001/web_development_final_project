import React from "react";
import {Routes, Route} from "react-router";
import ProfileScreen from "./profile";

const OtherUserProfileScreen = () => {
    const uid = window.location.pathname;
    return (
        <Routes>
            <Route path="/:uid" element={<ProfileScreen uid={uid}/>}/>
        </Routes>
    );
}
export default OtherUserProfileScreen;