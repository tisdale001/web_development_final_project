import {useNavigate} from "react-router";
import {createSearchParams} from "react-router-dom";
import {Card} from "react-bootstrap";

const ListingArrayComponent = ({listing, index, query}) => {
    const navigate = useNavigate();
    const params = {query: query.toString()};

    return (
        <div className="p-1 wd-search-content">
        <Card style={{cursor: "pointer"}} className=" mt-1 flex-column" onClick={() => {
            navigate({
                         pathname: '/details/' + listing._id,
                         search: `?${createSearchParams(params)}`
                     })
        }}>
            <Card.Header
                className="d-flex flex-row align-items-center justify-content-between">
                <Card.Img variant={"top"} style={{height: "90px", width: "90px"}}
                          src={listing.record_image} className="rounded"/>
                <h5 className="ms-md-0 ms-3 mt-2">{listing.record_name + " - $" + listing.record_price}</h5>
            </Card.Header>
            <div className="d-flex flex-row">
                <Card.Body className="d-flex mb-0 align-items-center p-2">
                    <Card.Img style={{height:"70px", width:"70px"}} variant={"top"} src={listing.record_vendor.profilePic} className="ms-2 rounded-circle"/>
                    <div className="d-flex ms-4 mt-2 flex-column align-content-start">
                        <h5>{"Vendor: " + listing.record_vendor.firstName + " "
                             + listing.record_vendor.lastName}</h5>
                        <h6>{"Quantity: " + listing.record_quantity}</h6>
                        <h6 className="mb-2">{"Shipped From: " + listing.record_vendor.location}</h6>
                    </div>
                </Card.Body>
            </div>
        </Card>
        </div>
    );
};

export default ListingArrayComponent;