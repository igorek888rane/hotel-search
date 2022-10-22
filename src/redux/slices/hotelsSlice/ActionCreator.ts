import {createAsyncThunk} from "@reduxjs/toolkit";
import {HotelsParams, IHotel} from "./hotelsTypes";
import {getHotels} from "../../../api/hotelsApi";
import {addFavorites, deleteFavorites, getFavorites} from "../../../api/favoritesHotelsApi";


export const fetchHotels = createAsyncThunk('hotels/fetchHotels',
    async ({location, checkIn, checkOut}: HotelsParams, thunkAPI) => {
        try {
            return await getHotels({location, checkIn, checkOut})
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось найти отели')
        }
    })
export const addFavoritesHotel = createAsyncThunk('hotels/addFavoritesHotel',
    async (hotel: IHotel) => {
        return await addFavorites(hotel)
    })
export const deleteFavoritesHotel = createAsyncThunk('hotels/deleteFavoritesHotel',
    async (id:number) => {
        return await deleteFavorites(id)
    })
export const getFavoritesHotel = createAsyncThunk('hotels/getFavoritesHotel',
    async () => {
        return await getFavorites()
    })
