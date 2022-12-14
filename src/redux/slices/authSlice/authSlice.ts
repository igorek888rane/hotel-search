import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuthState} from "./authTypes";
import {authUser, fetchMe} from "./ActionCreator";


const initialState: IAuthState = {
    data: {},
    auth: false,
    message: '',
    loadingAuth: false,
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
        },
        setErrorMessage(state: IAuthState, action: PayloadAction<string>) {
            state.message = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authUser.pending, state => {
            state.loadingAuth = true
        })
        builder.addCase(authUser.fulfilled, (state, action) => {
            state.data = action.payload.data
            state.message = action.payload.message
            state.auth = true
            state.loadingAuth = false
        })
        builder.addCase(authUser.rejected, (state) => {
            state.loadingAuth = false
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

export const {logOut, setErrorMessage} = authSlice.actions
export default authSlice.reducer