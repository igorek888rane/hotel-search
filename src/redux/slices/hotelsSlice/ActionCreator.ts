import {createAsyncThunk} from "@reduxjs/toolkit";
import {HotelsParams} from "./hotelsTypes";
import {getHotels} from "../../../api";

export const fetchHotels = createAsyncThunk('hotels/fetchHotels',
    async ({city, checkIn, checkOut}: HotelsParams, thunkAPI) => {
        try {
            return await getHotels({city, checkIn, checkOut})
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось найти отели')
        }
    })