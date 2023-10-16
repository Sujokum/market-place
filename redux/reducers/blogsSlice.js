import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    editBlogs : null

};

const blogsSlice  = createSlice({

    name : 'blogs',
    initialState,
    reducers : {
        editBlog(state , action) {
            state.editBlogs = action.payload;
        },
    }

})



export const {addAllBlogs ,  editBlog } = blogsSlice.actions;

export default blogsSlice.reducer;