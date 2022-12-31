import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    findAllListingsThunk,
    getAlbumsThunk,
} from "../services/discogs-thunk";
import {Card, Button} from "react-bootstrap";
import {uuid4} from "uuid4"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {createSearchParams, Link, useNavigate} from "react-router-dom";
import {clearListings} from "../reducers/discog-reducer";
import notfound from "../images/not-found.jpg";

function SearchBar(noBlur) {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const [newInput, setNewInput] = useState("");
    const [isInputChanged, setIsChanged] = useState(false);
    const [visibility, setVisibility] = useState("d-none p-0");

    const findListings = (listing) => (event) => {
        dispatch(findAllListingsThunk(listing.id));
        const params = {
            'id': listing.id.toString(),
            "query": newInput
    };
        navigation({
                       pathname: "/search",
                       search: `?${createSearchParams(params)}`
                   });
    }

    useEffect(() => {
        // TIMEOUT ADDED TO PREVENT DISCOGS API FROM RATE-LIMITING DUE TO TOO MANY API CALLS
        const delayedGetRequest = setTimeout(() => {
            if (!newInput){
                dispatch(clearListings());
            }
            if(isInputChanged) {
                if (newInput!=="") {
                            setIsChanged(false);
                            dispatch(getAlbumsThunk(newInput));
                            setVisibility("d-block p-0")
                }
        }}, 150);
        return () => clearTimeout(delayedGetRequest)
    }, [newInput]);

    const query = useSelector(state =>
        state.discogs
    )
    return (
        <div  className="row mt-3 p-0" style={{border: "1px solid lightgrey"}} >
            <div className="p-0 row-12 position-relative">
                <input  onBlur={()=> setTimeout(() => setVisibility("p-0 d-none"),200)} onFocus={()=> setTimeout(()=> setVisibility("p-0 d-block"),100)}
                       className="form-control row-cols-3 shadow-none" style={{borderRadius: 0}}
                       placeholder={"Search for new records here..."} value={newInput} onChange={(e) =>
                {
                    if (e.target.value === ""){
                        setVisibility("d-none");
                        setNewInput(e.target.value);
                        return;
                    }
                    setNewInput(e.target.value)
                    setIsChanged(true)}}/>
                <FontAwesomeIcon  icon={faSearch} className="me-3 position-absolute d-none d-none-sm d-md-block end-0 d-none top-50 translate-middle-y"/>
            </div>
            <div className={visibility}>
                <div className="wd-search-scroll-div  p-0">
                    {
                        // Test if there's a title and an artist
                        query.discogsAlbumQuery.map(e =>
                        {
                            if (e.title.split("-").length === 2){
                        return <Card onClick={findListings(e)} style={{borderRadius: 0, height: "fit-content"}} key={uuid4()} className="wd-on-hover border-1 d-flex flex-row ">
                            <Link className="text-dark text-decoration-none w-100 p-0 m-0 d-flex flex-row">
                            <img style={{height: "100px", width: "100px"}} src={!e.thumb?  notfound : e.thumb}/>
                                <div className="p-0 ms-3 d-flex flex-column justify-content-center"
                                     style={{height: "100px", width: "75%"}}>
                                    <div className="p-1 fw-bold" style={{width: "fit-content"}}>{e.title.split("-")[1]}</div>
                                    <div className="p-1">{e.title.split("-")[0]}</div>
                                </div>
                            </Link>
                        </Card>
                        }
                        })
                    }
                </div>
            </div>
    </div>

    );
}


export default SearchBar;
