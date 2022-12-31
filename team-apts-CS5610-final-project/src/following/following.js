import React, {useEffect} from "react";
import FollowingListItem from "./following-list-item";
import {uuid4} from "uuid4";

const FollowingComponent = ({currentUser, followed}) => {


    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <h5 className="m-0 p-2 fw-bold">Following</h5>
                </li>
                {
                    !currentUser &&
                    <>
                        <li className="list-group-item">
                            Please log in...
                        </li>
                    </>

                }
                {
                    currentUser && followed.length > 0 &&

                    followed.slice(0).reverse().map((followingItem, i) => {
                        if (i < 10) {
                            return <FollowingListItem key={uuid4()} followingItem={followingItem} currentUser={currentUser}/>
                        }
                    })

                }
            </ul>
        </>
    );
}
export default FollowingComponent;