import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "../services/users-thunks";
import UserItem from "./user-item";
import "./index.css";

let once = true;

const UsersListComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, []);

    const {users} = useSelector(state => state.users);

    return(
        <>
            <ul className="list-group list-group-item-action">
                {   users.length > 0 &&
                    users.slice(0).reverse().map((user, i) => {
                        if (i < 5) {
                            return <UserItem key={user.username} user={user}/>
                        }
                    })
                }
            </ul>
        </>
    );
}
export default UsersListComponent;