import {Modal, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllOpenApprovalsThunk} from "../services/admin-thunk";
import AdminApprovalItem from "./admin-approval-item";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import {uuid4} from "uuid4";
import AdminNoApprovalsMsg from "./admin-no-approvals-msg";

const CreateListingModal = (props) => {
    const dispatch = useDispatch();
    const decrement = () => {
        setLowerIndex(lowerIndex <= 4 ? 0 : lowerIndex-4);
        setUpperIndex(upperIndex <= 8 ? 4 : upperIndex-4);
    }
    const increment = () => {
        if (openApprovals.length <= 4) return;
        setLowerIndex(lowerIndex+4);
        setUpperIndex(upperIndex+4 > openApprovals.length ? openApprovals.length : upperIndex+4);
    }
    useEffect(() => {
        dispatch(getAllOpenApprovalsThunk());
    }, [])


    const openApprovals = useSelector(state => state.admin.openApprovals);
    const [lowerIndex, setLowerIndex] = useState(0);
    const [upperIndex, setUpperIndex] = useState(4);
    return (
        <div className="mt-sm-0 mt-6 p-0">
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Open Approvals
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-2 pb-2">
                    {openApprovals.length === 0 ? <AdminNoApprovalsMsg/> :
                        openApprovals.slice(lowerIndex,upperIndex).map((e) => <AdminApprovalItem key={uuid4()} approval={e}/>)}
                    {/*    openApprovals.map((e) =>*/}
                    {/*<AdminApprovalItem key={uuid4()} approval={e}/>)}*/}
                </Modal.Body>
                <Modal.Footer className="d-flex flex-row justify-content-between">
                    <div className="p-0 d-flex flex-column">
                        <span>{"Total Approvals: " + openApprovals.length}</span>
                        <span>{"Showing Approvals "+(lowerIndex+1)+" to "+ (upperIndex)}</span>
                    </div>
                    <div className="p-0 d-flex flex-row align-items-center">
                        <FontAwesomeIcon onClick={decrement} className="wd-font-awesome-hover wd-font-awesome-hover-dark me-3" fontSize="1.5rem" icon={faCircleArrowLeft}/>
                        <FontAwesomeIcon  onClick={increment} className="wd-font-awesome-hover wd-font-awesome-hover-dark me-3" fontSize="1.5rem" icon={faCircleArrowRight}/>
                        <Button className="ms-3 bg-dark" onClick={props.onHide}>Close</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateListingModal;
