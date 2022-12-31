import ListingArrayComponent from "./listing-array-component";
import {uuid4} from "uuid4";
import React from "react";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";

const ListingArrayContainer = ({listings, albumName}) => {
  const [lowerIndex, setLowerIndex] = useState(0);
    const [upperIndex, setUpperIndex] = useState(3);
    const decrement = () => {
        setLowerIndex(lowerIndex <= 3 ? 0 : lowerIndex-3);
        setUpperIndex(upperIndex <= 7 ? 3 : upperIndex-3);
    }
    const increment = () => {
        if (listings.length <= 3) return;
        setLowerIndex(lowerIndex+3);
        setUpperIndex(upperIndex+3 > listings.length ? listings.length : upperIndex+3);
    }

    return (
        <div>
            <h4 className="ms-5 mt-3">{"Total Results: " +listings.length}</h4>
            {/*<h5 className="ms-5">{"Showing Results: " + (lowerIndex+1).toString() + "-"+ upperIndex.toString()}</h5>*/}
        <div className="d-flex flex-wrap flex-row ps-4 pb-4 pe-4 justify-content-center">
            {
            listings.map((e, index) => {
            return <ListingArrayComponent query={albumName} index={index} listing={e}  key={uuid4()}/>
            })
            }
            {/*<div className="p-0 d-flex flex-row align-items-center">*/}
            {/*    <FontAwesomeIcon onClick={decrement} className="wd-font-awesome-hover wd-font-awesome-hover-dark me-3" fontSize="1.5rem" icon={faCircleArrowLeft}/>*/}
            {/*    <FontAwesomeIcon  onClick={increment} className="wd-font-awesome-hover wd-font-awesome-hover-dark me-3" fontSize="1.5rem" icon={faCircleArrowRight}/>*/}
            {/*</div>*/}
        </div>
        </div>
    )
}

export default ListingArrayContainer;