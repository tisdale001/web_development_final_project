import React, {useEffect} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import EditProfileComponent from "./edit-profile-component";
import WhoToFollowComponent from "../following/who-to-follow";
import {useDispatch, useSelector} from "react-redux";
import FollowingComponent from "../following/following";
import {getAllFollowedThunk} from "../services/following-thunk";

const EditProfileScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser) {
            dispatch(getAllFollowedThunk(currentUser._id));
        }
    }, []);

    const {currentUser} = useSelector(state => state.users);
    const followed = useSelector(state => state.following.followedUsers);

    return (
        <div className="">
            <NavigationSidebar/>
            {
                !currentUser &&
                <>
                    <div className="container mt-2">
                        <h3>Please log in</h3>
                    </div>
                </>
            }
            {
                currentUser &&
                <>
                    <div className="container mt-2">
                        <div className="row">
                            <div className="col-xxl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">

                                <EditProfileComponent currentUser={currentUser} />

                            </div>
                            <div className="col-xxl-4 col-lg-4 p-0 ">
                                {
                                    currentUser &&
                                    <div className="border p-2 rounded-2">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <div className="d-flex">
                                                    <div className="my-auto d-inline-flex">
                                                        <img src={currentUser.profilePic} className="wd-format-profile-pic-ps rounded-circle"/>
                                                    </div>
                                                    <div className="my-auto d-inline-flex flex-nowrap fs-5 ms-3 fw-bold">
                                                        {currentUser.firstName}&nbsp;{currentUser.lastName}
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="mt-3">
                                            <WhoToFollowComponent currentUser={currentUser}/>
                                        </div>
                                        <div className="mt-3">
                                            {   currentUser && followed &&
                                                <FollowingComponent currentUser={currentUser} followed={followed}/>
                                            }
                                        </div>
                                    </div>

                                }
                            </div>
                        </div>
                    </div>
                </>

            }
        </div>
    );
}
export default EditProfileScreen;