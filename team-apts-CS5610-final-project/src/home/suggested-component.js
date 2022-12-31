import React from "react";
import RecordGridItem from "./record-grid-item";
import "./index.css";

const SuggestedComponent = ({suggested}) => {
    return(
        <>
            <ul className="list-group">
                {!suggested ? <></>:
                    suggested.map(record => <RecordGridItem key={record._id} record={record}/>)
                }
            </ul>
        </>
    );
}
export default SuggestedComponent;