import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, registerThunk } from "../services/users-thunks";
import bgImg from "../images/login-music-final.jpg";
import './index.css';
import { setError } from "../reducers/users-reducer";
import { useNavigate } from "react-router-dom";
import {createEmptyWishlistThunk} from "../services/wishlist-thunk";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {createEmptyShoppingCartThunk} from "../services/shopping-cart-thunk";

const Login = () => {
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [validatePassword, setValidatePassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');
    const [dob, setDob] = useState("");
    const [bio, setBio] = useState('');
    const [loginPageFlag, setLoginPageFlag] = useState(true);
    const {currentUser, error} = useSelector((state) => state.users);
    const dispath = useDispatch();
    const navigate = useNavigate();
    const handleLoginBtn = () => {
        const loginUser = {username,password};
        dispath(loginThunk(loginUser));
    }
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            dispath(setError("Passwords must match!"))
            return;
        }
        const dateJoined = new Date().toLocaleDateString();
        const numOfReviews = 0;
        const numOfWishlist = 0;
        const userType = "BUYER"
        const requestToBeSeller = false;
        const bannerPic = "https://c4.wallpaperflare.com/wallpaper/276/510/467/vinyl-retro-records-wallpaper-preview.jpg";
        const profilePic = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
        const newUser = {email, username, password, firstName, lastName, bio, location, dob, dateJoined, numOfReviews, numOfWishlist, requestToBeSeller,
            bannerPic, profilePic, userType};
        dispath(registerThunk(newUser)).then((e) => {
            if (e.payload) {
                dispath(createEmptyWishlistThunk(e.payload.username))
                dispath(createEmptyShoppingCartThunk(e.payload._id));
            }
        })
    }
    useEffect(() => {
        if (!error && currentUser) {
            if (currentUser.type) {
                if (currentUser.type == "ADMIN" || currentUser.type == "SELLER") {
                    navigate("/home")
                    return
                }
            }
            navigate('/home');
        }
    }, [currentUser, error]);
    const changePageFlag = (flag) => {
        setUserName("")
        setPassword("")
        dispath(setError(null))
        setValidatePassword("")
        setLoginPageFlag(flag)
    }
    return (
        <>
            <NavigationSidebar isLoginPage={true}/>
            <section className="login-page-main-section vh-100">
                <div className="container h-100 py-5">
                    <div className="row h-100 align-items-center justify-content-center">
                        <div className="col col-xl-10">
                            <div className="card">
                                <div className="row g-0">
                                    <div className="d-flex align-items-center col-lg-7 col-md-6">
                                        <div className="card-body p-4 p-lg-5">
                                                {
                                                    !error 
                                                    ? 
                                                        <></>
                                                     :
                                                    <div className="alert alert-danger" role="alert">{error}</div>
                                                }
                                            
                                                     {
                                                        loginPageFlag == true ? 

                                                               <form>
                                                                    <h4 className="fw-bold mb-3 pb-3">Sign into your account</h4>
                                                                    <div className="form-group pb-4">
                                                                        <label className="form-label" htmlFor="login-username">Username:</label>
                                                                        <input type="email" id="login-username" name="login-username" onChange={e => setUserName(e.target.value)} value={username} className="form-control form-control-lg" placeholder="e.g. alice"/>
                                                                    </div>
                                                                    <div className="form-group pb-4">
                                                                        <label className="form-label" htmlFor="login-password">Password:</label>
                                                                        <input type="password" id="login-password" name="login-password" onChange={e => setPassword(e.target.value)} value={password} className="form-control form-control-lg" placeholder="e.g. alice1234"/>
                                                                    </div>
                                                                    <div className="form-group pt-1 d-flex justify-content-center pb-4">
                                                                        <button type="button" className="btn btn-lg btn-primary rounded-pill w-100" onClick={() => handleLoginBtn()} >Login</button>
                                                                    </div>
                                                                    <div className="form-group d-flex justify-content-center">
                                                                        <span>New to the site? <a onClick={() => changePageFlag(false)} className="cursor-pointer text-primary text-decoration-none">Register here</a></span>
                                                                    </div>
                                                                </form>
                                                        : 
                                                         <form>
                                                            <h4 className="fw-bold mb-3">New User Registration</h4>
                                                                <div className="form-group pb-2">
                                                                    <label className="form-label" htmlFor="register-email">Email:</label>
                                                                    <input type="email" id="register-email"  name="register-email" onChange={e => setEmail(e.target.value)} value={email} className="form-control form-control-md" placeholder="e.g. hello@gmail.com"/>
                                                                </div>
                                                                <div className="form-group pb-2">
                                                                    <label className="form-label" htmlFor="register-username">Username:</label>
                                                                    <input type="text" id="register-username" name="register-username" onChange={e => setUserName(e.target.value)} value={username} className="form-control form-control-md" placeholder="e.g. alice"/>
                                                                </div>
                                                                <div className="form-group pb-2">
                                                                    <label className="form-label" htmlFor="register-password">Password:</label>
                                                                    <input type="password" id="register-password" onChange={e => setPassword(e.target.value)} value={password} className="form-control form-control-md" placeholder="e.g. alice1234"/>
                                                                </div>
                                                                <div className="form-group pb-2">
                                                                    <label className="form-label" htmlFor="edit-password">Re-enter password:</label>
                                                                    <input type="password" id="edit-password" onChange={e => setValidatePassword(e.target.value)} defaultValue={validatePassword} className="form-control form-control-md" placeholder="e.g. alice1234"/>
                                                                </div>
                                                                <div className="form-group pb-2">
                                                                    <label className="form-label" htmlFor="first-name">First Name:</label>
                                                                    <input type="text" id="first-name" onChange={e => setFirstName(e.target.value)} defaultValue={firstName} className="form-control form-control-md" placeholder="e.g. Jhon"/>
                                                                </div>
                                                                <div className="form-group pb-2">
                                                                    <label className="form-label" htmlFor="last-name">Last Name:</label>
                                                                    <input type="text" id="last-name" onChange={e => setLastName(e.target.value)} defaultValue={lastName} className="form-control form-control-md" placeholder="e.g. Doe"/>
                                                                </div>
                                                                <div className="form-group pb-2">
                                                                    <label className="form-label" htmlFor="location">Location:</label>
                                                                    <input type="text" id="location" onChange={e => setLocation(e.target.value)} defaultValue={location} className="form-control form-control-md" placeholder="e.g. Boston, MA"/>
                                                                </div>
                                                                <div className="form-group pb-2">
                                                                    <label className="form-label" htmlFor="bio">Bio:</label>
                                                                    <input type="text" id="bio" onChange={e => setBio(e.target.value)} defaultValue={bio} className="form-control form-control-md" placeholder="e.g. Software developer, speaker"/>
                                                                </div>
                                                                <div className="form-group pb-2">
                                                                    <label className="form-label" htmlFor="dob">Date of Birth:</label>
                                                                    <input type="date" id="dob" name="Date-of-birth" onChange={e => setDob(e.target.value)} defaultValue={dob} className="form-control form-control-md"/>
                                                                </div>
                                                                <div className="form-group pt-1 d-flex justify-content-center pb-2">
                                                                    <button type="button" className="btn btn-lg btn-primary rounded-pill w-100"  onClick={() => handleRegisterBtn()}>Register</button>
                                                                </div>
                                                                <div className="form-group d-flex justify-content-center">
                                                                    <span>Already have an account? <a onClick={() => changePageFlag(true)} className="cursor-pointer text-primary text-decoration-none">Login here</a></span>
                                                                </div>
                                                         </form>
                                                    }
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src={bgImg} alt="login page image" className="img-fluid right-side-radius" />
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
                </div>
            </section>
        </>
    )

}

export default Login;