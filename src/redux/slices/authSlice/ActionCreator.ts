import {createAsyncThunk} from "@reduxjs/toolkit";
import {IResponse, paramsType} from "./authTypes";
import {auth, getMe} from "../../../api";

export const authUser = createAsyncThunk<IResponse, paramsType>('auth/authUser',
    async ({path, params}) => {
        const data = await auth({path, params})
        if (data.data.token) {
            localStorage.setItem('token', data.data.token)
        }
        return data
    })

export const fetchMe =
    createAsyncThunk<IResponse>('auth/fetchMe', async () => await getMe())