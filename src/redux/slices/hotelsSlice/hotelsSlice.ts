import {IFavoriteHotel, IHotel, IHotelsState} from "./hotelsTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addFavoritesHotel, deleteFavoritesHotel, fetchHotels, getFavoritesHotel} from "./ActionCreator";


const initialState: IHotelsState = {
    hotels: [],
    favoritesHotels: [],
    loading: false,
    loadingFavorite: false,
    message: '',
}


const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        // addFavorites: (state: IHotelsState, action: PayloadAction<IHotel>) => {
        //     state.favoritesHotels.push(action.payload)
        // },
        // removeFavorites: (state: IHotelsState, action: PayloadAction<IHotel>) => {
        //     state.favoritesHotels = state.favoritesHotels.filter(h => h.hotelId !== action.payload.hotelId)
        // },
    },
    extraReducers: {
        [fetchHotels.pending.type]: (state: IHotelsState) => {
            state.loading = true
        },
        [fetchHotels.fulfilled.type]: (state: IHotelsState, action: PayloadAction<IHotel[]>) => {
            state.hotels = action.payload
            state.loading = false
        },
        [fetchHotels.rejected.type]: (state: IHotelsState, action: PayloadAction<string>) => {
            state.message = action.payload
            state.loading = false
        },
        [getFavoritesHotel.pending.type]: (state: IHotelsState) => {
            state.loadingFavorite = true
        },
        [getFavoritesHotel.fulfilled.type]: (state: IHotelsState, action: PayloadAction<IFavoriteHotel[]>) => {
            state.favoritesHotels = action.payload
            state.loadingFavorite = false
        },
        [getFavoritesHotel.rejected.type]: (state: IHotelsState) => {
            // state.message = 'Не удалось добавить в избранное '
            state.loadingFavorite = false
        },
        [addFavoritesHotel.fulfilled.type]: (state: IHotelsState, action: PayloadAction<IFavoriteHotel>) => {
            state.favoritesHotels.push(action.payload)
        },

        [deleteFavoritesHotel.fulfilled.type]: (state: IHotelsState, action: PayloadAction<IFavoriteHotel>) => {
            state.favoritesHotels = state.favoritesHotels.filter(f => f.hotelId !== action.payload.hotelId)

        },


    }
})


export const {} = hotelsSlice.actions
export default hotelsSlice.reducer