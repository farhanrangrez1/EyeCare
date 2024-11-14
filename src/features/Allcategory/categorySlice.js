import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriesService from "./categoryService";


const initialState={
  AallCategori:[],
  // card:[],
    categories:null,
    isLoding : false,
    isError:false,
    isSuccess:false, 
    message:""
}

  const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{
      rese: (state)=>{
        state.isLoding=false
        state.isSuccess=false
        state.isError=false
        state.message=''
       }
    },
    extraReducers:(builder)=>{
        builder
         //fetchCategory
      .addCase(fetchCategory.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.isLoding = false;
        state.isError = false;
        state.isSuccess = true;
        state.AallCategori = action.payload; // Corrected from state.user to state.AallCategori
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.isLoding = false;
        state.isSuccess = false;
        state.AallCategori = null;
        state.isError = action.payload;
      })
    
    },
  })

//AllCategori
export const fetchCategory = createAsyncThunk("categories/AallCategori", async (data) => {
  try {
    return await categoriesService.fetchCategory(data)
   } catch (error) {
    console.error('Error fetching all categories:', error);
    
  }
});


  export default categoriesSlice.reducer