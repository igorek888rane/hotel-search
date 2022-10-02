import {createSlice} from "@reduxjs/toolkit";
import {IAuthState} from "./authTypes";
import {authUser} from "./ActionCreator";


const initialState: IAuthState = {
    data: {},
    message: '',
    loading: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut() {
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authUser.pending, state => {
            state.loading = true
        })
        builder.addCase(authUser.fulfilled, (state, action) => {
            state.data = action.payload.data
            state.message = action.payload.message
            state.loading = false
        })
        builder.addCase(authUser.rejected, (state) => {
            state.message = 'Ошибка'
            state.loading = false
        })
    }
})

export const {logOut} = authSlice.actions
export default authSlice.reducer