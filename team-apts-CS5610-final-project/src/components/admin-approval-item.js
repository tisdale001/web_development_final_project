import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";
import {faXmarkSquare} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {closeApprovalThunk} from "../services/admin-thunk";

const AdminApprovalItem = ({approval}) => {
    const dispatch = useDispatch();
    const approve = () => {
        const decision = {user: {...approval, requestToBeSeller: false}, decision: "APPROVE"}
        dispatch(closeApprovalThunk(decision))
    }
    const deny = () => {
        const decision = {user: {...approval, requestToBeSeller: false}, decision: "DENIED"}
        // const decision = {username: approval.username, decision: "DENIED"}
        dispatch(closeApprovalThunk(decision))
    }
    return (
        <div className="p-2 align-items-center d-flex flex-row mb-2 w-100" style={{border: "1px solid lightgray"}}>
            <img style={{height: "75px", width: "75px"}} src={approval.profilePic}/>
            <div className="mt-1 ms-3 d-flex flex-column">
                <h4 className="me-3">{"Vendor Status Request"}</h4>
                <h5>{"User: " + approval.firstName + " " +approval.lastName}</h5>

            </div>
            <div className="p-0 d-flex flex-row justify-content-center align-content-center">
                <FontAwesomeIcon id="green" onClick={approve} className="ms-3 me-3 wd-font-awesome-hover" fontSize="2.75rem" icon={faCheckSquare} color="darkgreen"/>
                <FontAwesomeIcon onClick={deny} className="wd-font-awesome-hover" fontSize="2.75rem" icon={faXmarkSquare} color="red"/>
            </div>
        </div>
    )

}

export default AdminApprovalItem;