import React from "react";
import checkCircleImg from "../images/check-circle.png";
import "./index.css";
import {useDispatch} from "react-redux";
import {addFollowerThunk} from "../services/following-thunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const WhoToFollowListItem = ({user, currentUser, followedUsers}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formatJoined = () => {
        const joinDate = new Date(user.dateJoined);
        const timeDiff = joinDate.getTimezoneOffset() * 60000;
        const adjustedDate = new Date(joinDate.valueOf() + timeDiff);
        const month = adjustedDate.toLocaleString('default', {month: 'long'});
        return "Joined " + month + " " + adjustedDate.getFullYear();
    }

    const handleFollowClick = () => {
        if (followedUsers.length === 0) {
            dispatch(addFollowerThunk({
                following_user: currentUser._id,
                followed_user: user._id
            }));
        }
        else {
            if (!followedUsers.some(u=> u.followed_user._id === user._id)) {
                dispatch(addFollowerThunk({
                    following_user: currentUser._id,
                    followed_user: user._id
                }));
            }
        }
    }

    return(
        <>
        <li className="list-group-item">
                <div className="row">
                    <div  className="col-2 col-xl-2 col-lg-3 col-md-2 col-sm-2 my-auto">
                        <img src={`${user.profilePic}`} className="wd-profile-pic-format-follow rounded-circle cursor-pointer" onClick={() => {navigate("/profile/" + user.username);}}/>
                    </div>
                    <div className="col-6 col-xl-7 col-lg-6 col-md-6 col-sm-6">
                        <div className="fs-5 text-dark fw-bold cursor-pointer" onClick={() => {navigate("/profile/" + user.username);}}>
                            <span className="text-wrap">
                                <span className="d-inline-block">{user.firstName}</span>&nbsp;
                                <span className="d-inline-block">{user.lastName}</span>&nbsp;
                            </span>
                            <span className="d-inline-block">
                                <FontAwesomeIcon className="text-primary d-inline-block" style={{fontSize:"15px"}} icon={faCircleCheck} />&nbsp;
                                <span className="text-secondary fw-normal fs-1rem d-inline-block">{user.type.toLowerCase()}</span>
                            </span>

                        </div>
                        {/*<div className="text-dark mt-1">{user.bio}</div>*/}
                        <div className="text-secondary">
                            <img src={require("../images/calendar-outline.png")} className="my-auto wd-calendar-icon-format-follow"/>&nbsp;
                            <span>{formatJoined()}</span>
                        </div>
                        {/*<div className="">*/}
                        {/*    <div className="text-dark d-inline-block ">*/}
                        {/*        <span>{user.numOfReviews}</span>&nbsp;*/}
                        {/*        <span>Reviews</span>*/}
                        {/*    </div>*/}
                        {/*    /!*<div className="text-dark d-inline-block ms-3">*!/*/}
                        {/*    /!*    <span>{user.numOfWishlist}</span>&nbsp;*!/*/}
                        {/*    /!*    <span>in Wish List</span>*!/*/}
                        {/*    /!*</div>*!/*/}
                        {/*</div>*/}
                    </div>
                    <div className="col-4 col-xl-3 col-lg-3 col-md-4 col-sm-4 my-auto ">
                        {
                            followedUsers &&
                                <button className="btn btn-primary float-end rounded-pill" onClick={handleFollowClick}>Follow</button>
                        }
                    </div>
                </div>
            </li>
        </>
    );
}
export default WhoToFollowListItem;