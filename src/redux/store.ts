import {configureStore} from "@reduxjs/toolkit";
import auth from "./slices/authSlice/authSlice";
import hotels from "./slices/hotelsSlice/hotelsSlice";
import search from "./slices/searchSlice/searchSlice";


const store = configureStore({
    reducer: {
        auth,
        hotels,
        search
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store