import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userProfilesService from "./userProfileServise";


const initialState = {
  Allprofile:[],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // UserProfile
      .addCase(UserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.Allprofile = action.payload;
        localStorage.setItem(JSON.stringify(action.payload)); 
      })
      .addCase(UserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.Allprofile = null;
        state.isError = action.error.message || "Something went wrong";
      });
  },
});

// Actions
    export const UserProfile = createAsyncThunk("Allprofile/UserProfile", async (data, thunkAPI) => {
        try {
            return await userProfilesService.UserProfile(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const Changepassword = createAsyncThunk("Allprofile/Changepassword", async (data, thunkAPI) => {
    try {
        return await userProfilesService.Changepassword(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export default userProfileSlice.reducer;
