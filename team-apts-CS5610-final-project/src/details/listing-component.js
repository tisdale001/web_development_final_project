import React, {useEffect, useState} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {useDispatch, useSelector} from "react-redux";
import {findAllListingsThunk, getAlbumByIdThunk} from "../services/discogs-thunk";
import {useSearchParams} from "react-router-dom";
import NoListingsFoundScreen from "./not-found-component";
import {Card} from "react-bootstrap";
import ListingArrayContainer from "./listing-array-container";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ListingComponent = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const albumName = searchParams.get("query");
    const hrefId = searchParams.get("id");
    useEffect(() => {
            dispatch(findAllListingsThunk(hrefId))
            dispatch(getAlbumByIdThunk({album: albumName, id: hrefId}));
    },[hrefId, dispatch]);
    const listings = useSelector(state => state.discogs.listings);
    const notFound = useSelector(state => state.discogs.notFound);

    return(
        <>
            <div className="mb-2">
                <NavigationSidebar/>
                {!albumName && !hrefId ?
                 <div className="text-center mt-5">
                    <FontAwesomeIcon className="mb-4" fontSize="5rem" icon={faSearch}/>
                     <div><h1>Please use our searchbar to look for an album!</h1></div>
                 </div>
                                       :
                    <Card style={{height: "inherit"}} className="d-flex p-0 mt-2 container">
                        <h1 className="m-2 mb-3 ms-5">Results</h1>
                        <img style={{height: "400px"}}
                             src="https://c4.wallpaperflare.com/wallpaper/276/510/467/vinyl-retro-records-wallpaper-preview.jpg"/>
                        <div className="p-0 m-0">
                            {listings.length === 0 ? <NoListingsFoundScreen details={notFound}/> :
                             <ListingArrayContainer albumName={albumName} listings={listings}/>
                            }
                        </div>
                    </Card>
                }
            </div>
        </>
    );
}
export default ListingComponent;