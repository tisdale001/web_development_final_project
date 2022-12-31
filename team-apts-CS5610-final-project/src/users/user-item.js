import React from "react";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import checkCircleImg from "../images/check-circle.png";
import "./index.css";
import {Link, useNavigate} from "react-router-dom";

const UserItem = ({user}) => {
    const formatJoined = () => {
        const joinDate = new Date(user.dateJoined);
        const timeDiff = joinDate.getTimezoneOffset() * 60000;
        const adjustedDate = new Date(joinDate.valueOf() + timeDiff);
        const month = adjustedDate.toLocaleString('default', {month: 'long'});
        return "Joined " + month + " " + adjustedDate.getFullYear();
    }
    const navigate = useNavigate()
    return(
        <>
            <li className="list-group-item cursor-pointer" onClick={() => {navigate("/profile/" + user.username);}}>
                    <div className="d-flex">
                        <div className="p-2">
                             <img className="rounded-circle" height={70} width={70}src={`${user.profilePic}`}/>
                        </div>
                        <div className="p-2">
                             <div class="row">
                                <div className="fw-bold">{user.firstName}&nbsp;{user.lastName}</div>
                                <div>Bio: {user.bio}</div>
                                <div className="text-secondary">
                                    <span><i class="bi bi-calendar3"></i></span>&nbsp;<span>{formatJoined()}</span>
                                </div>
                                <div className="text-secondary">
                                    <span>Reviews:&nbsp;<span className="text-dark">{user.numOfReviews}</span></span>&nbsp;<span>Wishlisted:&nbsp;<span className="text-dark">{user.numOfReviews}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
               
                {/* <div className="d-inline-flex flex-nowrap">
                    <div  className="flex-inline my-auto">
                        <img src={`${user.profilePic}`} className="wd-profile-pic-format rounded-circle"/>
                    </div>
                    <div className="flex-inline ms-3 my-auto">
                        <div className="fs-4 text-dark">
                            {user.firstName} {user.lastName}&nbsp;
                            <img src={checkCircleImg} className="wd-check-circle-icon-format"/>&nbsp;
                            <span className="text-secondary">{user.type.toLowerCase()}</span>
                        </div>
                        <div className="text-dark mt-1">{user.bio}</div>
                        <div className="text-secondary mt-1">
                            <img src={require("../images/calendar-outline.png")} className="my-auto wd-calendar-icon-format"/>&nbsp;
                            <span>{formatJoined()}</span>
                        </div>
                        <div className="">
                            <div className="text-dark d-inline-block">
                                <span>{user.numOfReviews}</span>&nbsp;
                                <span>Reviews</span>
                            </div>
                            <div className="text-dark d-inline-block ms-3">
                                <span>{user.numOfWishlist}</span>&nbsp;
                                <span>in Wish List</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </li>
        </>
    );
}
export default UserItem;