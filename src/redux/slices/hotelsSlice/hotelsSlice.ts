import {IHotel, IHotelsState} from "./hotelsTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchHotels} from "./ActionCreator";


const initialState: IHotelsState = {
    hotels: [],
    favoritesHotels: [],
    loading: false,
    message: '',
}


const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        addFavorites: (state: IHotelsState, action: PayloadAction<IHotel>) => {

        },
        removeFavorites: (state: IHotelsState, action: PayloadAction<IHotel>) => {

        },
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
    }
})


export const {addFavorites, removeFavorites} = hotelsSlice.actions
export default hotelsSlice.reducer