import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: localStorage.getItem('user') ?  localStorage.getItem('user') : null,
   isAuthenticated: false
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      loginSuccess: (state, action) => {
         state.user = action.payload;
         state.isAuthenticated = true;
         localStorage.setItem('user', JSON.stringify(state))
      },
      logoutSuccess: (state, _) => {
         state.user = null;
         state.isAuthenticated = false
         localStorage.removeItem('user')
      }
   }
})

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;  

