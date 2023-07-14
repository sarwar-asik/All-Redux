## Installation and setup Redux ToolKIt

#### install

            npm install @reduxjs/toolkit react-redux
            npm i redux-logger
            npm i --save-dev @types/redux-logger

## for counter >>>>

### src>redux>store.ts ::::

        import { configureStore } from "@reduxjs/toolkit";
        import counterReducer from "./features/counter/counterSlice";

        const store = configureStore({
        reducer: {
            counter: counterReducer,
        },
        });

        export type RootState = ReturnType<typeof store.getState>

        export type AppDispatch = typeof store.dispatch
        export default store;

### main.tsx ::::::

        <Provider store={store}>
            <RouterProvider router={routes} />
            </Provider>

### src>redux>features>counter>counterSlice.ts ::::

    import { PayloadAction, createSlice } from "@reduxjs/toolkit";

        interface counterState{
        count:number
        }

        const initialState :counterState= {
        count: 0
        }

            const counterSlice = createSlice({
            name: "counter",
            initialState: initialState,
            reducers: {
                increment: (state) => {
                state.count = state.count + 1;
                },
                decrement: (state) => {
                state.count = state.count - 1;
                },
                incrementByAmount: (state, action: PayloadAction<number>) => {


                state.count += action.payload
                },
            },
            });

        export const {increment,decrement,incrementByAmount} = counterSlice.actions

        export default counterSlice.reducer;

### src>redux>hooks :::::

        import { useDispatch, useSelector } from 'react-redux'
        import type { TypedUseSelectorHook } from 'react-redux'
        import type { RootState, AppDispatch } from './store'

        // Use throughout your app instead of plain `useDispatch` and `useSelector`
        export const useAppDispatch: () => AppDispatch = useDispatch
        export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


### src >App.tsx ::::

    import { RootState } from "./redux/store";
    import { decrement, increment,incrementByAmount } from "./redux/features/counter/counterSlice";
    import { useAppDispatch, useAppSelector } from "./redux/hooks";

         const { count } = useAppSelector((state: RootState) => state.counter);
         const dispatch = useAppDispatch();

       <button
          onClick={() => dispatch(increment())}
          className="bg-slate-400 p-3 text-white rounded-xl my-2"
         >
           Increment
        </button>

## with middleware>>>>

### src>redux>middleware>logger.ts (curring function) :::

        import { Middleware } from "@reduxjs/toolkit";

        const logger: Middleware = (store) => (next) => (action) => {
        console.log("🚀 ~ file: logger.ts:2 ~ logger ~ store:", store.getState);
        next(action)
        };

        export default logger;

###### src>redux>store.ts ::::

        import { configureStore } from "@reduxjs/toolkit";
        import counterReducer from "./features/counter/counterSlice";
        import logger from "./middleware/logger";



        const store = configureStore({
        reducer: {
            counter: counterReducer,
        },
        middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
        // devTools:true
        });

        export type RootState = ReturnType<typeof store.getState>;

        export type AppDispatch = typeof store.dispatch;
        export default store;
