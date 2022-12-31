import React from "react";
import "../index.css";
import {useDispatch} from "react-redux";
import {deleteReviewByIdThunk} from "../../services/review-thunk";
import {Link} from "react-router-dom";
import bigXImg from "../../images/big_x.png";

const ReviewsListItemByAlbum = ({review, currentUser, profileUser}) => {
    const dispatch = useDispatch();
    const deleteReview = () => {
        dispatch(deleteReviewByIdThunk(review._id));
    }
    console.log("review._id");
    console.log(review._id);

    return(
        <>
            {/*<Link to={"/details/" + review._id}>*/}

                <li className="list-group-item">
                    <div className="d-flex">
                        <div>
                            <Link to={"/details/" + review.listing._id + "?query=" + review.listing.record_name.split(' ')[0]}>
                                <img src={review.listing.record_image} className="rounded-3" width="70px" height="70px"/>
                            </Link>
                        </div>
                        <div className="d-flex w-100 flex-column ms-3">
                                <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <img src={review.user.profilePic}className="rounded-pill" width="30px" height="30px"/>
                                            <span className="ps-2">{review.user.username}</span>
                                        </div>
                                        {/*<div className="cursor-pointer">*/}
                                        {/*    <img src={bigXImg} className="wd-big-x-format" onClick={deleteReview}/>*/}
                                        {/*</div>*/}
                                    {
                                        currentUser && profileUser && currentUser.username === profileUser.username &&
                                        <div className="cursor-pointer">
                                            <img src={bigXImg} className="wd-big-x-format" onClick={deleteReview}/>
                                        </div>
                                    }
                                </div>
                                    <div className="mt-2 d-flex">
                                        <img src={require(review.rating >= 1 ? "../../images/gold-star-icon.png" : "../../images/gray-star-icon.jpg")}
                                                className="wd-gold-star-format me-1" />
                                        <img src={require(review.rating >= 2 ? "../../images/gold-star-icon.png" : "../../images/gray-star-icon.jpg")}
                                                className="wd-gold-star-format me-1" />
                                        <img src={require(review.rating >= 3 ? "../../images/gold-star-icon.png" : "../../images/gray-star-icon.jpg")}
                                                className="wd-gold-star-format me-1" />
                                        <img src={require(review.rating >= 4 ? "../../images/gold-star-icon.png" : "../../images/gray-star-icon.jpg")}
                                                className="wd-gold-star-format me-1" />
                                        <img src={require(review.rating >= 5 ? "../../images/gold-star-icon.png" : "../../images/gray-star-icon.jpg")}
                                                className="wd-gold-star-format me-1" />
                                    </div>
                                    <div className="word-break-all d-flex">
                                        {review.body}
                                    </div>
                       </div>
                    </div>
                </li>
            {/*</Link>*/}
        </>
    );
}
export default ReviewsListItemByAlbum;