import {
    addFollowerThunk
} from "../services/following-thunk";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";


const SimpleFollowingButton = ({currentUser, profileUser, followers}) => {
    const dispatch = useDispatch();

    return (
        <>
            {!profileUser || ! currentUser  ? <></> :
                <div>
                    <button onClick={() => {
                        dispatch(addFollowerThunk({
                            following_user: currentUser._id,
                            followed_user: profileUser._id
                        }))
                    }}
                            className={followButtonStyle}  >Follow</button>
                </div>
            }
        </>
    )
}

export default SimpleFollowingButton;