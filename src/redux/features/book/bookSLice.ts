// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// interface IUserState {
//   book: {
//     title: string;
//     author: string;
//     genre: string;
//     publicationDate: string;
//   } | null;
//   isLoading: boolean;
//   isError: boolean;
//   error: string | null;
// }

// const initialState: IUserState = {
//   book:null,
//   isLoading: false,
//   isError: false,
//   error: null,
// };

// interface Icredential {
//   name?: string;
//   email: string;
//   password: string;
// }

// export const createUser = createAsyncThunk(
//   "user/createUser",
//   async ({  email, password }: Icredential) => {
//     const data = await createUserWithEmailAndPassword(auth, email, password);
//     return data.user.email;
//   }
// );

// const userSlice = createSlice({
//   name: "auth",
//   initialState: initialState,
//   reducers: {
//     deleteBook: (state) => {
//       state.user = initialState.user;
//     },
//     setUser:(state,{payload})=>{
//         state.user = payload
//         state.isLoading =false
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createUser.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//         state.error = null;
//       })
//       .addCase(createUser.fulfilled, (state, action) => {
//         state.user.email = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(createUser.rejected, (state, action) => {
//         state.user.email = null;
//         state.isLoading = false;
//         // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//         state.error = action.error.message!;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//         state.error = "";
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.user.email = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.user.email = null;
//         state.isLoading = false;
//         // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//         state.error = action.error.message!;
//       });
//   },
// });

// export const  {logout,setUser} = userSlice.actions

// export default userSlice.reducer;
