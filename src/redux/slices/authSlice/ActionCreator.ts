import {createAsyncThunk} from "@reduxjs/toolkit";
import {IResponse, paramsType} from "./authTypes";
import {auth, getMe} from "../../../api";
import {setErrorMessage} from "./authSlice";


export const authUser = createAsyncThunk('auth/authUser',
    async ({path, params}: paramsType, thunkAPI) => {
        try {
            const data = await auth({path, params})
            if (data.data.token) {
                localStorage.setItem('token', data.data.token)
            }
            return data
        } catch (e: any) {
            thunkAPI.dispatch(setErrorMessage(e.response.data.message))
            return thunkAPI.rejectWithValue(e)
        }
    })

export const fetchMe =
    createAsyncThunk<IResponse>('auth/fetchMe', async () => await getMe())