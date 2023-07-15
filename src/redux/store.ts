import { configureStore } from "@reduxjs/toolkit";

// import logger from "./middleware/logger";
import userSLice from "./features/users/userSLice";
import { api } from "./api/apiSLice";
import notificationSLice from "./notification/notificationSLice";



const store = configureStore({
  reducer: {
    user:userSLice,
    notification:notificationSLice
    ,
    [api.reducerPath]:api.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware)
  // devTools:true
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
