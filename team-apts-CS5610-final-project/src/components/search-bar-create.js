import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    createAlbumListingThunk,
    findAllListingsThunk,
    getAlbumsThunk,
} from "../services/discogs-thunk";
import {Card, Button} from "react-bootstrap";
import {uuid4} from "uuid4"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {useNavigate} from "react-router-dom";
import notfound from "../images/not-found.jpg";

function SearchBarCreate({callback}) {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const [newListingInput, setNewListingInput] = useState("");
    const [isInputChanged, setIsChanged] = useState(false);
    const [visibility, setVisibility] = useState("d-none p-0");


    const fillFormControl = (listing) => (event) => {
        const data = {
            // These values are from the discogs api
            "discogs_id": listing.id,
            "record_name": listing.title.split("-")[1].trim(),
            "record_artist": listing.title.split("-")[0].trim(),
            "record_genre": !listing.genre ? [] : listing.genre,
            "record_year": !listing.year ? "N/A" : listing.year,
            "record_image": !listing.thumb ? notfound : listing.thumb
        }
        console.log(data);
        setVisibility("d-none");
        callback(data);
    }

    useEffect(() => {
        // TIMEOUT ADDED TO PREVENT DISCOGS API FROM RATE-LIMITING DUE TO TOO MANY API CALLS
        const delayedGetRequest = setTimeout(() => {
            if(isInputChanged) {
                if (newListingInput!=="") {
                    setIsChanged(false);
                    dispatch(getAlbumsThunk(newListingInput));
                    setVisibility("d-block p-0")
                }
            }}, 150);
        return () => clearTimeout(delayedGetRequest)
    }, [newListingInput]);

    const query = useSelector(state =>
        state.discogs
    )
    return (
        <div className="ms-3 row h-100 w-50" style={{border: "1px solid lightgrey"}} >
            <div className="p-0 row-12 position-relative">
                <input  onFocus={()=> setTimeout(()=> setVisibility("p-0 d-block"),100)}
                        className="form-control row-cols-3 shadow-none" style={{borderRadius: 0}}
                        placeholder={"Search for new records here..."} value={newListingInput} onChange={(e) =>
                {
                    if (e.target.value === ""){
                        setVisibility("d-none");
                        setNewListingInput(e.target.value);
                        return;
                    }
                    setNewListingInput(e.target.value)
                    setIsChanged(true)}}/>
                <FontAwesomeIcon  icon={faSearch} className="me-3 position-absolute end-0 top-50 d-none d-none-sm d-block-md translate-middle-y"/>
            </div>
            <div className="p-0">
                <div className="wd-create-search-div   p-0">
                    {
                        // Test if there's a title and an artist
                        query.discogsAlbumQuery.map(e =>
                        {
                            if (e.title.split("-").length === 2){
                                return <Card onClick={fillFormControl(e)} style={{borderRadius: 0, height: "fit-content"}} key={uuid4()} className="border-1 wd-on-hover d-flex flex-row row-cols-4">
                                    <img style={{height: "100px"}} src={!e.thumb? notfound : e.thumb }/>
                                    <div className="p-0 d-flex flex-column justify-content-center"
                                         style={{height: "100px", width: "75%"}}>
                                        <div className="p-1 fw-bold" style={{width: "fit-content"}}>{e.title.split("-")[1]}</div>
                                        <div className="p-1">{e.title.split("-")[0]}</div>
                                    </div>
                                </Card>
                            }
                        })
                    }
                </div>
            </div>
        </div>

    );
}


export default SearchBarCreate;
