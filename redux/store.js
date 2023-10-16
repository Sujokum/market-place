import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from './reducers/blogsSlice';


const store =  configureStore({
    reducer : {
        blogs : blogsReducer,
    
    }
})

export default store