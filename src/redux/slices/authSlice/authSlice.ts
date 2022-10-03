import {createSlice} from "@reduxjs/toolkit";
import {IAuthState} from "./authTypes";
import {authUser, fetchMe} from "./ActionCreator";


const initialState: IAuthState = {
    data: {},
    auth: false,
    message: '',
    loading: false,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut(state: IAuthState) {
            state.data = {}
            state.auth = false
            state.message = ''
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authUser.pending, state => {
            state.loading = true
        })
        builder.addCase(authUser.fulfilled, (state, action) => {
            state.data = action.payload.data
            state.message = action.payload.message
            state.auth = true
            state.loading = false
        })
        builder.addCase(authUser.rejected, (state) => {
            state.message = 'Ошибка'
            state.loading = false
        })
        builder.addCase(fetchMe.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchMe.fulfilled, (state, action) => {
            state.data = action.payload.data
            state.message = action.payload.message
            state.auth = true
            state.loading = false
        })
        builder.addCase(fetchMe.rejected, (state) => {
            state.message = 'Ошибка'
            state.loading = false
        })
    }
})

export const {logOut} = authSlice.actions
export default authSlice.reducer