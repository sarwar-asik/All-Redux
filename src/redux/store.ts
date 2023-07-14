import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import logger from "./middleware/logger";
import userSLice from "./features/users/userSLice";



const store = configureStore({
  reducer: {
    counter: counterReducer,
    user:userSLice
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
  // devTools:true
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
