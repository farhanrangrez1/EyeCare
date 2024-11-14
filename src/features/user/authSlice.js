import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: userExist ? userExist : null,
  AllUser: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Logout
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.AllUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.isError = action.payload;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload)); // Save user to localStorage on login
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.isError = action.error.message || "Something went wrong";
      });
  },
});

// Actions
export const { logout } = authSlice.actions;

// Thunks
export const registerUser = createAsyncThunk("AllUser/registerUser", async (data) => {
  try {
    return await authService.registerUser(data);
  } catch (error) {
    console.log(error);
  }
});

export const loginUser = createAsyncThunk("AllUser/loginUser", async (data) => {
  try {
    return await authService.loginUser(data);
  } catch (error) {
    console.log(error);
  }
});

export default authSlice.reducer;
