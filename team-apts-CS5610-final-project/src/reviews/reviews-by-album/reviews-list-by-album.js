import React, {useEffect} from "react";
import ReviewsListItemByAlbum from "./reviews-list-item-by-album";
import {useDispatch, useSelector} from "react-redux";
import {getAllReviewsByUsernameThunk} from "../../services/review-thunk";

const ReviewsListByAlbum = ({currentUser, profileUser}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllReviewsByUsernameThunk(profileUser.username));
    }, []);
    const reviews = useSelector(state => state.reviews.reviews);

    return(
        <>
            <ul className="list-group">
                {
                    reviews && reviews.length === 0 &&
                    <li className="list-group-item">
                        <p className="text-secondary">No reviews yet...</p>
                    </li>
                }
                {
                    reviews && reviews.length > 0 &&
                    reviews.map(review =>
                        <ReviewsListItemByAlbum key={review._id} review={review} currentUser={currentUser} profileUser={profileUser}/>
                    ).reverse()
                }
            </ul>
        </>
    );
}
export default ReviewsListByAlbum;