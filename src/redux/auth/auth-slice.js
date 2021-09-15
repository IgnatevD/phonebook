/** @format */

import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogIn: false,
  isLoding: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogIn = false;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isLoding = true;
      state.isLogIn = true;
    },
  },
  [authOperations.fetchCurrentUser.fulfilled](state, action) {
    state.isLogIn = false;
    state.user = action.payload;
    state.isLoding = false;
  },

  [authOperations.fetchCurrentUser.rejected](state) {
    state.isLoding = false;
  },
});

export default authSlice.reducer;
