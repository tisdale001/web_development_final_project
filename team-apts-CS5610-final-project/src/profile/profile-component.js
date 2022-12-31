import React, {useEffect, useState} from "react";
import "./profile-style-sheet.css";
import {Link} from "react-router-dom";
import ModalWrapperButton from "../components/modal-wrapper-button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import ReviewsByAlbum from "../reviews/reviews-by-album/reviews-by-album";
import FollowingButton from "../following/following-button";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import {addFollowerThunk} from "../services/following-thunk";
import {useDispatch} from "react-redux";

const ProfileComponent = ({currentUser, profileUser, followed}) => {
    let uid = window.location.pathname;
    if (uid.includes("/profile")) {
        let url_parts = uid.split("/").filter(part => part);
        uid = url_parts[url_parts.length - 1];
    }
    const dispatch = useDispatch();

    const formatBirthDate = () => {
        const dateArr = profileUser.dob.split("-")
        const year = dateArr[0];
        const month = dateArr[1];
        const day = dateArr[2];
        const newDate = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)));
        const timeDiff = newDate.getTimezoneOffset() * 60000;
        const adjustedDate = new Date(newDate.valueOf() + timeDiff);
        const longMonth = adjustedDate.toLocaleString('default', { month: 'long' });
        return "Born " + longMonth + " " + adjustedDate.getUTCDate() + ", " + adjustedDate.getFullYear();
    };
    const formatJoined = () => {
        const joinDate = new Date(profileUser.dateJoined);
        const timeDiff = joinDate.getTimezoneOffset() * 60000;
        const adjustedDate = new Date(joinDate.valueOf() + timeDiff);
        const month = adjustedDate.toLocaleString('default', {month: 'long'});
        return "Joined " + month + " " + adjustedDate.getFullYear();
    }

    const handleFollowClick = () => {
        if (followed.length === 0) {
            dispatch(addFollowerThunk({
                following_user: currentUser._id,
                followed_user: profileUser._id
            }));
        }
        else {
            if (!followed.some(u=> u.followed_user._id === profileUser._id)) {
                dispatch(addFollowerThunk({
                    following_user: currentUser._id,
                    followed_user: profileUser._id
                }));
            }
        }
    }

    const navigate = useNavigate();
    const loginRedirectHandler = () => {
        navigate("/login")
    }

    console.log("profileUser--profile component");
    console.log(profileUser);

    return (
        <>
            {(!currentUser && (uid==="profile" || uid==="/profile")) ?
                <>
                 <div
                    className="modal show"
                    style={{ display: 'block' }}
                    >
                        <Modal.Dialog
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header>
                            <Modal.Title className="text-danger">Login required</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <p>Please login to access the profile.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={() => loginRedirectHandler()}>Login</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                </>
                : !profileUser ? <></> :
                <div className="">
                    <div className="rounded-2 bg-white border">
                        <h3 className="m-2 ps-4">Profile</h3>
                        {/*banner image*/}
                        <div className="p-2">
                            <img src={`${profileUser.bannerPic}`}
                                 className="w-100 wd-banner-pic-format-profile"/>
                        </div>
                        {/*edit profile button*/}
                        { currentUser && profileUser.username === currentUser.username &&
                            <Link to="/edit-profile" className="float-end me-2 wd-ep-button-format rounded-pill">
                                <button id="edit-profile-btn" className="btn text-white">Edit profile</button>
                            </Link>}
                        {/*follow button*/}
                        {
                            currentUser && followed && profileUser.username !== currentUser.username &&
                            <>
                                <div className="float-end me-2">
                                    <button className="btn btn-primary" onClick={handleFollowClick}>Follow</button>
                                </div>
                            </>
                        }
                        {/*avatar*/}
                        <div className="position-relative">
                            <img src={`${profileUser.profilePic}`}

                                 className="rounded-circle wd-profile-pic-format-profile position-absolute wd-profile-pic-margins-profile"/>
                            {/*<FollowingButton  followers={followers} currentUser={currentUser} profileUser={profileUser}/>*/}


                        </div>
                        {/*profile info*/}
                        <div className="m-5">
                            <div className="wd-leave-extra-space-below-avatar-profile">
                                <div className="row">
                                    <h5 className="fw-bold m-0">{profileUser.firstName} {profileUser.lastName}</h5>
                                    <div className="text-secondary">{profileUser.type === "BUYER" ? "Buyer" :
                                        <div>
                                            Seller
                                            <FontAwesomeIcon className="ms-1 text-primary" icon={faCircleCheck} />
                                        </div>
                                    }</div>
                                </div>
                                <div className="text-black mt-2">{profileUser.bio}</div>
                                { currentUser && profileUser.username === currentUser.username &&
                                    <div className="row mt-2">
                                        <div>Email:</div>
                                        <div>{profileUser.email}</div>
                                    </div> }

                                <div className="row mt-2">
                                    <div className="d-inline-block text-secondary w-auto">
                                        <img src={require("../images/map-pin-vector.png")}
                                             className="wd-map-vector-icon-format-profile my-auto"/>&nbsp;
                                        <span className="">{profileUser.location}</span>
                                    </div>
                                    { currentUser && profileUser.username === currentUser.username &&
                                        <div className="d-inline-block text-secondary w-auto">
                                            <img src={require("../images/birthday-cake.png")}
                                                className="wd-cake-icon-format-profile my-auto"/>&nbsp;
                                            <span>{formatBirthDate()}</span>
                                        </div>}
                                    <div className="d-inline-block text-secondary w-auto">
                                        <img src={require("../images/calendar-outline.png")} className="my-auto wd-calendar-icon-format-profile"/>&nbsp;
                                        <span>{formatJoined()}</span>
                                    </div>
                                </div>
                                {/*<div className="row mt-2">*/}
                                {/*    <div className="d-inline-block text-secondary w-auto">*/}
                                {/*        <span>{profileUser.numOfReviews}</span>&nbsp;*/}
                                {/*        <span>Reviews</span>*/}
                                {/*    </div>*/}
                                {/*    <div className="d-inline-block text-secondary w-auto">*/}
                                {/*        <span>{profileUser.numOfWishlist}</span>&nbsp;*/}
                                {/*        <span>in Wish List</span>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {
                                    currentUser && profileUser.username === currentUser.username && profileUser.type === "SELLER" &&
                                    <>
                                        <div className=" mt-2">
                                            <ModalWrapperButton/>
                                        </div>
                                    </>
                                }

                                <div className="mt-3">
                                    <h4 className="fw-bold">Reviews</h4>
                                    <ReviewsByAlbum key={profileUser._id} currentUser={currentUser} profileUser={profileUser}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
}
export default ProfileComponent;