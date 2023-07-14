import { toast } from "react-toastify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../lib/firebase.config";

interface IUserState {
  user: {
    name?: string | null;
    email: string | null;
    password: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const initialState: IUserState = {
  user: {
    name: null,
    email: null,
    password: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

interface Icredential {
  name?: string;
  email: string;
  password: string;
}

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ name, email, password }: Icredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }: Icredential) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data;
    // return {email,password}
  }
);

const userSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = initialState.user;
    },
    setUser:(state,{payload})=>{
        state.user = payload
        state.isLoading =false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        state.error = action.error.message!;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
          console.log("🚀 ~ file: userSLice.ts:89 ~ .addCase ~ state11111:", state)
          console.log("🚀 ~ file: userSLice.ts:89 ~ .addCase ~ action:222222", action)
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        state.error = action.error.message!;
      });
  },
});

export const  {logout,setUser} = userSlice.actions

export default userSlice.reducer;
