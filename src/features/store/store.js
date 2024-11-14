import {configureStore } from "@reduxjs/toolkit";
import cartReducer from "../AddCart/cartSlice";
import authReducer from "../user/authSlice"
import categoriesReducer from '../Allcategory/categorySlice';
import productReducer from '../Product/productSlice';
import userProfileReducer from "../Profile/userProfileSlice"

export const store = configureStore({
  reducer: {
    allCart :cartReducer,
    user:authReducer,
    categories:categoriesReducer,
    product:productReducer,
    cart:cartReducer,
    userProfile:userProfileReducer,  
  },
});