import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartService from "./cartService";


const initialState={
    Allcart:[],
    isLoding : false,
    isError:false,
    isSuccess:false, 
    message:""
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{},
   extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
          state.isLoding = true; // Set loading state
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
          state.isLoding = false;
          state.isError = false;
          state.isSuccess = true;
          state.Allcart = action.payload; // Set cart data
      })
      .addCase(fetchCart.rejected, (state, action) => {
          state.isLoding = false;
          state.isSuccess = false;
          state.isError = true; // Set error state
          state.message = action.payload.error; // Set error message
      });
},
})


export const AddCart = createAsyncThunk("AddCart/Allcart", async(data)=>{
    try {
      return await cartService.AddCart(data)
     } catch (error) { 
      console.error('Error fetching all categories:', error);
    }
  })



  export const fetchCart = createAsyncThunk("Allcard/fetchCart", async (data, thunkAPI) => {
    try {
      return await cartService.fetchCart(data);
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: 'Something went wrong',
        originalError: error,
        
      });
    }
  });
  export const removeCart = createAsyncThunk("AddCart/Allcart", async(data)=>{
    try {
      return await cartService.removeCart(data)
     } catch (error) { 
      console.error('Error fetching all categories:', error);
    }
  })
export default cartSlice.reducer