import { configureStore } from "@reduxjs/toolkit";

import logger from "./middleware/logger";
import userSLice from "./features/users/userSLice";
import { api } from "./api/apiSLice";



const store = configureStore({
  reducer: {
    user:userSLice,
    [api.reducerPath]:api.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
  // devTools:true
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
