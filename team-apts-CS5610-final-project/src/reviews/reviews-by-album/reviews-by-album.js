import React from "react";
import ReviewsListByAlbum from "./reviews-list-by-album";

const ReviewsByAlbum = ({currentUser, profileUser}) => {
    return(
        <>
            <ReviewsListByAlbum currentUser={currentUser} profileUser={profileUser}/>
        </>
    );
}
export default ReviewsByAlbum;