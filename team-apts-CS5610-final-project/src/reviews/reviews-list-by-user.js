import React from "react";
import ReviewsListItemByUser from "./reviews-list-item-by-user";

const ReviewsListByUser = ({reviews}) => {
    // const reviewsArr = [{profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    // body: "blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah.",
    // rating: 2, _id: 123},
    //     {profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    //         body: "blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah.",
    //     rating: 3, _id:234}];


    return(
        <>
            <ul className="list-group">
                {
                    reviews.slice(0).reverse().map(review =>
                        <ReviewsListItemByUser key={review._id} review={review}/>)
                }
            </ul>
        </>
    );
}
export default ReviewsListByUser;