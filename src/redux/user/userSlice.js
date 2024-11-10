import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  token: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
    },
    updateUsername: (state, action) => {
      state.currentUser.userName = action.payload;
    },
    updatePassword: (state, action) => {
      state.currentUser.password = action.payload;
    },
    deleteAccount:(state)=>{
      state.currentUser=null
    },
    signOut:(state)=>{
      state.currentUser=null
      localStorage.clear()
    },
  },
});

export const {
  loginSuccess,
  updatePassword,
  updateUsername,
  deleteAccount,
  signOut,
} = userSlice.actions;

export default userSlice.reducer;
