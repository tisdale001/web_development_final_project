import React, {useEffect} from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {findAllUsersThunk} from "../services/users-thunks";
import {useDispatch, useSelector} from "react-redux";
import {getAllFollowedThunk} from "../services/following-thunk";


const WhoToFollowComponent = ({currentUser}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllUsersThunk());
        if (currentUser) {
            dispatch(getAllFollowedThunk(currentUser._id));
        }
    }, []);

    const {users} = useSelector(state => state.users);
    const {followedUsers} = useSelector(state => state.following);
    console.log("users");
    console.log(users);
    console.log("followedUsers");
    console.log(followedUsers);

    return(
        <>
            <ul className="list-group">

                <li className="list-group-item">
                    <h5 className="m-0 p-2 fw-bold">Who To Follow</h5>
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
                currentUser && users.length > 0 &&

                    users.slice(0).reverse().map((user, i) => {
                    if (i < 5) {
                        return <WhoToFollowListItem key={user.username} user={user} currentUser={currentUser} followedUsers={followedUsers}/>
                    }
                    })

            }
            </ul>
        </>
    );
}
export default WhoToFollowComponent;