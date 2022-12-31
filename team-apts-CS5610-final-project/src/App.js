import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import VinylShop from "./home/vinyl-shop";


function App() {
    return (
        <BrowserRouter>
            {/* <div className="position-relative w-100"> */}
                {/* <img src={bgImg} className="wd-bgImg-format w-100"/> */}
                {/* <div className="position-absolute w-100 top-0">
                    <div className="container mt-2"> */}
                        <Routes>
                            <Route path="/*" element={<VinylShop/>}/>
                        </Routes>
                    {/* </div> */}
                {/* </div> */}

            {/* </div> */}
        </BrowserRouter>
    )
}

export default App;
