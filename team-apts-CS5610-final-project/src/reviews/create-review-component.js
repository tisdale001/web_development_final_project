import React, {useState} from "react";
import "../index.css";
import {createReviewThunk} from "../services/review-thunk";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const CreateReviewComponent = ({setNewReview, details, currentUser}) => {
    const dispatch = useDispatch();
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(1);
    // const [newReview, setNewReview] = useState(true);

    const createReview = () => {
        // dynamically pass in rating from the onclick event
        const newReview = {listing: details._id, rating: rating, body: body, user: currentUser._id};

        setNewReview(true);
        dispatch(createReviewThunk(newReview));
        setBody('');
        setRating(1);
    }

    return(
        <>

            <div  className="border p-2 text-start rounded-2">
                <div className="row align-items-center">
                        <div className="ms-0 col-3 col-md-2 col-sm-3 ">
                            <Link to={"/profile/" + currentUser.username}>
                                <img  src={currentUser.profilePic}
                                className="ms-4 wd-create-review-pfp rounded-circle"/>
                            </Link>

                        </div>
                        <div className="col-9 col-lg-10 col-md-10 col-sm-9">
                            <div className="float-end">
                                {/*5 stars*/}
                                <img src={require(rating >= 1 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                     className="wd-gold-star-format me-1" onClick={() => setRating(1)}/>
                                <img src={require(rating >= 2 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                     className="wd-gold-star-format me-1" onClick={() => setRating(2)}/>
                                <img src={require(rating >= 3 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                     className="wd-gold-star-format me-1" onClick={() => setRating(3)}/>
                                <img src={require(rating >= 4 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                     className="wd-gold-star-format me-1" onClick={() => setRating(4)}/>
                                <img src={require(rating >= 5 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                     className="wd-gold-star-format " onClick={() => setRating(5)}/>
                            </div>
                            <div className="float-start mt-2">
                                <textarea value={body} placeholder="Write a review...."
                                          className="form-control border-1 wd-min-width-100" cols={200}
                                          onChange={(event) => setBody(event.target.value)}>
                                </textarea>
                                <img src={require("../images/profile-icon.jpg")} className="wd-profile-icon-format rounded-circle mt-2"/>
                                <img src={require("../images/review-check.png")} className="wd-review-check-format mt-2"/>
                                <img src={require("../images/thumbs-up-five-star.png")} className="wd-thumbs-up-five-star-format ms-2 mt-2"/>
                                <div className="float-end mt-2">
                                    <button className="btn btn-primary" onClick={createReview}>Save</button>
                                </div>
                            </div>

                        </div>
                </div>

            </div>
        </>
    );
}
export default CreateReviewComponent;