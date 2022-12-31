import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import discogsReducer from "./reducers/discog-reducer";
import usersReducer from "./reducers/users-reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import reviewsReducer from "./reducers/reviews-reducer";
import wishlistReducer from "./reducers/wishlist-reducer";
import adminReducer from "./reducers/admin-reducer";
import 'bootstrap-icons/font/bootstrap-icons.css';
import followingReducer from "./reducers/following-reducer";
import shoppingCartReducer from "./reducers/shopping-cart-reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
    reducer: {discogs: discogsReducer, users: usersReducer, reviews: reviewsReducer, wishlist: wishlistReducer,
    admin: adminReducer, following: followingReducer, shoppingCart: shoppingCartReducer}
});

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
