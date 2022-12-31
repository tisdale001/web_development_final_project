import React, {useEffect} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import ProfileComponent from "./profile-component";
import {useDispatch, useSelector} from "react-redux";
import {findCurrentUserThunk, findUserByUsernameThunk, findUserThunk} from "../services/users-thunks";
import WhoToFollowComponent from "../following/who-to-follow";

import {getAllFollowedThunk} from "../services/following-thunk";
import FollowingComponent from "../following/following";
import "./index.css";


const ProfileScreen = () => {
    let uid = window.location.pathname;

    if (uid.includes("/profile")) {
        let url_parts = uid.split("/").filter(part => part);
        uid = url_parts[url_parts.length - 1];
    }
    const dispatch = useDispatch();
    useEffect( () => {
        if (uid==="profile" || uid==="/profile"){
            dispatch(findUserThunk()).then((x) => {if (x.payload) dispatch(getAllFollowedThunk(x.payload._id))});
        } else {
            const getCurrentUserAndFollowed = async () => {
                await dispatch(findCurrentUserThunk())
                    .then((e) => {if (e.payload) dispatch(getAllFollowedThunk(e.payload_id))})

            }
            dispatch(findUserByUsernameThunk(uid));
            getCurrentUserAndFollowed();
            // getCurrentUserAndFollowed().then(r => {dispatch(findUserByUsernameThunk(uid))})
        }

    }, [uid])
    // useEffect( () => {
    //     if (uid==="profile" || uid==="/profile"){
    //         const getProfileUserAndFollowed = async () => {
    //             await dispatch(findUserThunk())
    //                 .then((e) => {if (e.payload) dispatch(getAllFollowedThunk(e.payload._id))});
    //         }
    //         if (currentUser) {
    //             getProfileUserAndFollowed();
    //         }
    //
    //     } else {
    //         const getFollowed = async () => {
    //             if (currentUser) {
    //                 await dispatch(getAllFollowedThunk(currentUser._id));
    //             }
    //         }
    //         getFollowed().then(r => {dispatch(findUserByUsernameThunk(uid))})
    //     }

    // }, [])
    const {currentUser, profileUser} = useSelector((state) => state.users);
    const followed = useSelector(state => state.following.followedUsers);
    console.log("profileUser");
    console.log(profileUser);

    return (
        <div className="">
                <NavigationSidebar/>
            <div className="container mt-2">
                <div className="row">
                    {   currentUser &&
                        <div className="col-xxl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">

                            <ProfileComponent currentUser={currentUser} profileUser={profileUser} followed={followed}/>

                        </div>
                    }
                    {
                        !currentUser &&
                        <>
                            <div className="col-xxl-2 col-lg-2 p-0 "></div>
                            <div className="col-xxl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <ProfileComponent currentUser={currentUser} profileUser={profileUser} followed={followed}/>
                            </div>
                            <div className="col-xxl-2 col-lg-2 p-0 "></div>

                        </>
                    }


                        {
                            currentUser &&
                            <div className="col-xxl-4 col-lg-4 p-0 ">
                                <div className=" p-2 rounded-2">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="my-auto d-inline-flex">
                                                    <img src={currentUser.profilePic} className="wd-format-profile-pic-ps rounded-circle"/>
                                                </div>
                                                <div className="my-auto word-break-all d-inline-flex flex-nowrap fs-5 ms-3 fw-bold">
                                                    <span className="text-wrap">
                                                        <span className="d-inline-block">{currentUser.firstName}</span>&nbsp;
                                                        <span className="d-inline-block">{currentUser.lastName}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="mt-3">
                                        <WhoToFollowComponent currentUser={currentUser}/>
                                    </div>
                                    <div className="mt-3">
                                        {   currentUser && followed &&
                                            <FollowingComponent currentUser={currentUser} followed={followed}/>
                                        }
                                    </div>
                                </div>
                            </div>

                        }
                </div>
            </div>
        </div>
    );
}
export default ProfileScreen;