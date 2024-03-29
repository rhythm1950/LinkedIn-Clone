// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./userAPI";

// const initialState = {
//   user: null,
//   status: "idle",
// };

// export const incrementAsync = createAsyncThunk(
//   "counter/fetchCount",
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(incrementAsync.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(incrementAsync.fulfilled, (state, action) => {
//         state.status = "idle";
//         state.value += action.payload;
//       });
//   },
// });

// export const { login, logout } = userSlice.actions;

// export const selectUser = (state) => state.user.user;

// // export const incrementIfOdd = (amount) => (dispatch, getState) => {
// //   const currentValue = selectUser(getState());
// //   if (currentValue % 2 === 1) {
// //     dispatch(incrementByAmount(amount));
// //   }
// // };

// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//Selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
