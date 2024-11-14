import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./ProductService";


const initialState={
    Allproduct:[],
    categoryProduct:[],
    product: [],
    isLoding : false,
    isError:false,
    isSuccess:false, 
    message:""
}

const productSlice = createSlice({
    name:"product",
    initialState,
     reducers:{ 
    reset:(state)=>{
      state.isLoding=false
      state.isSuccess=false
      state.isError=false
      state.message=''
     }
  },

    extraReducers:(builder)=>{
      builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoding = false;
        state.isError = false;
        state.isSuccess = true;
        state.Allproduct = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoding = false;
        state.isSuccess = false;
        state.user = null;
        state.isError = action.payload;
      })
  
    },
})



export const fetchProduct = createAsyncThunk("fetchProduct/Allproduct", async(data)=>{
  try {
    return await productService.fetchProduct(data)
   } catch (error) { 
    console.error('Error fetching all categories:', error);
  }
})
export const {reset}=productSlice.actions
export default productSlice.reducer

