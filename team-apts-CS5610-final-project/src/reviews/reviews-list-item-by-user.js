import React from "react";
import "../index.css";
import {Link, useNavigate} from "react-router-dom";
import bigXImg from "../images/big_x.png"
import {useDispatch} from "react-redux";
import {deleteReviewByIdThunk} from "../services/review-thunk";

const ReviewsListItemByUser = ({review}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deleteReview = () => {
        dispatch(deleteReviewByIdThunk(review._id));
    }

    return(
        <>
            {/*<Link to={"/details/" + review._id}>*/}
            <li className="list-group-item">
                <div className="d-flex">
                    {/*<div>*/}
                    {/*    <Link to={"/details/" + review.listing._id + "?query=" + review.listing.record_name.split(' ')[0]}>*/}
                    {/*        <img src={review.listing.record_image} className="rounded-3" width="70px" height="70px"/>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className="d-flex w-100 flex-column ms-4 ms-xl-5">
                        <div className="d-flex">
                            <div className="flex-grow-1">
                                <img onClick={() => navigate("/profile/"+review.user.username)} src={review.user.profilePic}  style={{cursor: "pointer"}} className="rounded-pill" width="42px" height="42px"/>
                                <span className="ps-2">{review.user.firstName + " " + review.user.lastName}</span>
                            </div>
                        </div>
                        <div className="mt-2 mb-1 d-flex">
                            <img src={require(review.rating >= 1 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                 className="wd-gold-star-format me-1" />
                            <img src={require(review.rating >= 2 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                 className="wd-gold-star-format me-1" />
                            <img src={require(review.rating >= 3 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                 className="wd-gold-star-format me-1" />
                            <img src={require(review.rating >= 4 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                 className="wd-gold-star-format me-1" />
                            <img src={require(review.rating >= 5 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
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
//     return(
//         <>
//             <li style={{borderRadius:0}} className="list-group-item">
//                 <div className="text-start">
//                     <div className="row ">
//                         <div className="ms-0 col-2">
//                             <Link to={"/profile/" + review.user.username}>
//                                 <img src={review.user.profilePic}
//                                      className="ms-2 wd-profile-pic-format rounded-circle"/>
//                             </Link>
//                         </div>
//                         <div className="col-11 col-lg-10 col-md-10 col-sm-11">
//                             <div className="float-end wd-nowrap">
//                                 {/*5 stars*/}
//                                 <img src={require(review.rating >= 1 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
//                                      className="wd-gold-star-format me-1" />
//                                 <img src={require(review.rating >= 2 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
//                                      className="wd-gold-star-format me-1" />
//                                 <img src={require(review.rating >= 3 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
//                                      className="wd-gold-star-format me-1" />
//                                 <img src={require(review.rating >= 4 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
//                                      className="wd-gold-star-format me-1" />
//                                 <img src={require(review.rating >= 5 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
//                                      className="wd-gold-star-format me-1" />
//                             </div>
//                             <div className="float-start mt-2">
//                                 <div>
//                                     {review.body}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </li>
//
//         </>
//     );
// }
export default ReviewsListItemByUser;