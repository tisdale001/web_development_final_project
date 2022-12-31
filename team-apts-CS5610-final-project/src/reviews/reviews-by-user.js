import React from "react";
import CreateReviewComponent from "./create-review-component";
import ReviewsListByUser from "./reviews-list-by-user";

const ReviewsByUser = ({details, currentUser, reviews, setNewReview}) => {
    return(
        <>

            {
                details && currentUser &&
                <CreateReviewComponent details={details} currentUser={currentUser} setNewReview={setNewReview}/>
            }

            {
                !reviews ? " " :
                <ReviewsListByUser reviews={reviews}/>
            }
        </>
    );
}
export default ReviewsByUser;