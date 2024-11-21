import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginAPI,
  logoutAPI,
  refreshUserAPI,
  registerAPI,
  getUserInfoAPI,
} from './operations';

const AUTH_INITIAL_STATE = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  userInfo: null,
  loading: false,
  error: false,
};

const handlePending = state => {
  state.loading = true;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload || true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: AUTH_INITIAL_STATE,

  extraReducers: builder => {
    builder
      // Registration
      .addCase(registerAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.token = action.payload.data.accessToken;
      })
      // Login
      .addCase(loginAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.token = action.payload.data.accessToken;
      })
      // Refresh
      .addCase(refreshUserAPI.fulfilled, (state, action) => {
        state.token = action.payload.data.accessToken;
        state.loading = false;
        state.isLoggedIn = true;
      })
      // Get User Info
      .addCase(getUserInfoAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.data;
      })
      // Logout
      .addCase(logoutAPI.fulfilled, () => {
        return AUTH_INITIAL_STATE;
      })
      // Matchers
      .addMatcher(
        isAnyOf(
          registerAPI.pending,
          loginAPI.pending,
          refreshUserAPI.pending,
          logoutAPI.pending,
          getUserInfoAPI.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          registerAPI.rejected,
          loginAPI.rejected,
          refreshUserAPI.rejected,
          logoutAPI.rejected,
          getUserInfoAPI.rejected
        ),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
