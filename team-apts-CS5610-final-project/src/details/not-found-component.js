import React, {useEffect, useState} from "react";
import {Card, ListGroup} from "react-bootstrap";

const NoListingsFoundScreen = ({details}) => {
    return (
        <>
            {
            !details ? 
            <></> 
            :
             <div className="container p-4">
                <div className="d-flex flex-row align-items-center">
                    <div className="col-6 col-xl-2">
                        <div className="ms-4  p-2">
                            <img className="rounded-3" src={details.record_image}/>
                        </div>
                    </div>
                <Card className="d-none ms-5 d-xl-block mt-2 me-4">
                    <ListGroup  variant="flush">
                        <ListGroup.Item>
                            {details.record_name.length > 30 ? <h4>{"Artist: " +details.record_name.replace("*","")}</h4> :
                             <h2>{"Artist: " +details.record_name.replace("*","")}</h2>
                            }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {details.record_artist.length > 30 ? <h4>{"Artist: " +details.record_artist.replace("*","")}</h4> :
                             <h2>{"Artist: " +details.record_artist.replace("*","")}</h2>
                            }
                        </ListGroup.Item>
                        {details.record_artist.length > 30 ?   <>
                                                               <ListGroup.Item className="text-dark d-none d-xl-block"><h4 >Year recorded: {details.record_year}</h4></ListGroup.Item>
                                                               <ListGroup.Item className="d-none d-xxl-block"><h4 className="text-dark ">Genres: {details.record_genre}</h4></ListGroup.Item>
                                                           </> :
                         <>

                             <ListGroup.Item className="text-dark d-none d-sm-block"><h4 >Year recorded: {details.record_year}</h4></ListGroup.Item>
                             <ListGroup.Item className="d-none d-lg-block"><h4 className="text-dark ">Genres: {details.record_genre}</h4></ListGroup.Item>
                         </>}
                    </ListGroup>
                </Card>

                    <div className=" col-md-4 col-lg-6 m-2">
                        <div className="h-100  d-flex align-items-center p-2">
                            <h2 className="ms-xl-5 text-danger">This record is currently out of stock!</h2>
                        </div>
                    </div>
                </div>

                 {/*    <div className="d-flex d-none d-lg-block ms-4 flex-column col-md-6 col-lg-4 justify-content-start">*/}
                 {/*        <div className="p-2">*/}
                 {/*        <h2 className="text-dark">{details.record_name}</h2>*/}
                 {/*    </div>*/}
                 {/*    <div className="p-2">*/}
                 {/*        <h3 className="text-dark">By: {details.record_artist.replace("*","")}</h3>*/}
                 {/*    </div>*/}
                 {/*    <div className="p-2">*/}
                 {/*        <h5 className="text-dark">Genre: {details.record_genre}</h5>*/}
                 {/*    </div>*/}
                 {/*    <div className="p-2">*/}
                 {/*        <h5 className="text-dark">Year recorded: {details.record_year}</h5>*/}
                 {/*    </div>*/}
                 {/*    </div>*/}
                 {/*</div>*/}
            </div>
            }
        </>

    );
}
export default NoListingsFoundScreen;

