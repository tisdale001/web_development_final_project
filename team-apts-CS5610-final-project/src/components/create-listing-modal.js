import {Modal, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SearchBarCreate from "./search-bar-create";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createAlbumListingThunk} from "../services/discogs-thunk";
import {clearListings} from "../reducers/discog-reducer";

const CreateListingModal = (props) => {
    const currentUser = useSelector(state => state.users.currentUser);
    const dispatch = useDispatch();
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("")
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [id, setId] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const createNewListing = () => {
        const newListing = {
            // These values are from the discogs api
            "discogs_id": id,
            "record_name": album,
            "record_artist": artist,
            "record_genre": !genre ? [] : genre,
            "record_year": !year ? "N/A" : year,
            "record_image": !thumbnail ? "N/A" : thumbnail,
            // These values need to be passed in as local state
            record_price: price,
            record_quantity: quantity,
            "record_vendor" : {...currentUser}
        }
        dispatch(createAlbumListingThunk(newListing));
        dispatch(clearListings());
        setAlbum("");
        setArtist("");
        setYear("");
        setGenre("");
        setThumbnail("");
        setQuantity("");
        setId("");
        setPrice("");
        props.onHide();
    }
    const autoFill = (data) => {
        console.log(data);
        setAlbum(data.record_name);
        setArtist(data.record_artist);
        setGenre(data.record_genre);
        setYear(data.record_year);
        setId(data.discogs_id);
        setThumbnail(data.record_image);
    }
    return (
        <div className="p-0">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create Record Listing
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-2 pb-0">
                    <div className="pt-0 pb-0 d-flex flex-row justify-content-between">
                        <div className="w-50 me-2" style={{height: "40vh"}}>
                            <Form.Group className="d-flex flex-column  mb-3 w-100" controlId="formBasicEmail">
                                {/*<Form.Label className="mt-2">Please enter the fields below: </Form.Label>*/}
                                <Form.Control onChange={() => {}} value={album} type="email" placeholder="Album Name..." />
                                {/*<Form.Label className="mt-2">Artist Name: </Form.Label>*/}
                                <Form.Control onChange={() => {}} value={artist} className="mt-3" type="email" placeholder="Artist Name..." />
                                {/*<Form.Label className="mt-2">Year: </Form.Label>*/}
                                <Form.Control onChange={() => {}} value={year} className="mt-3" type="email" placeholder="Enter year..." />
                                {/*<Form.Label className="mt-2">Genre: </Form.Label>*/}
                                <Form.Control onChange={() => {}} value={genre} className="mt-3" type="email" placeholder="Enter genre..." />
                                {/*<Form.Label className="mt-2">Quantity: </Form.Label>*/}
                                <Form.Control onChange={(e) => setQuantity(e.target.value)} value={quantity} className="mt-3" type="email" placeholder="Enter quantity..." />
                                {/*<Form.Label className="mt-2">Price: </Form.Label>*/}
                                <Form.Control onChange={(e) => setPrice(e.target.value)} value={price} className="mt-3" type="email" placeholder="Enter price..." />
                            </Form.Group>
                        </div>
                        <SearchBarCreate callback={autoFill}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="bg-dark" onClick={createNewListing}>Submit</Button>
                    <Button className="bg-dark" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
    </div>
    )
}

export default CreateListingModal;