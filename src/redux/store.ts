import {configureStore} from "@reduxjs/toolkit";
import auth from "./slices/authSlice/authSlice";
import hotels from "./slices/hotelsSlice/hotelsSlice";
import search from "./slices/searchSlice/searchSlice";
import sort from "./slices/sortSlice/sortSlice";


const store = configureStore({
    reducer: {
        auth,
        hotels,
        search,
        sort,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store