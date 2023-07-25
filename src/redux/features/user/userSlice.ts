import { auth } from '@/lib/firebase';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

interface Icredential {
    email:string,
    password:string
}

const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};


export const createUser=createAsyncThunk('user/createUser',async({email,password}:Icredential)=>{
    const data = await createUserWithEmailAndPassword(auth,email,password)
    return data.user.email
})


const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(createUser.pending,(state)=>{
      state.isLoading =true,
      state.isError=false,
      state.error=null
    })
    .addCase(createUser.fulfilled,(state,action)=>{
        state.user.email=action.payload
        state.isLoading=false
    })
    .addCase(createUser.rejected,(state,action)=>{
        state.user.email=null
        state.isLoading= false
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        state.error = action.error.message!
    })
  }
});

export default userSlice.reducer
