import {infoType, ISearchState} from "./searchTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: ISearchState = {
    locationInput: 'Москва',
    dateInput: new Date().toISOString().split('T')[0],
    countDayInput: 1,
    info: {
        location: 'Москва',
        date: new Date().toISOString().split('T')[0],
        countDay: 1,
    }
}


const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeLocation: (state:ISearchState, action: PayloadAction<string>) => {
            state.locationInput = action.payload
        },
        changeDate: (state:ISearchState, action: PayloadAction<string>) => {
            state.dateInput = action.payload
        },
        changeCountDay: (state:ISearchState, action: PayloadAction<number>) => {
            state.countDayInput = action.payload
        },
        changeInfo: (state:ISearchState, action: PayloadAction<infoType>) => {
            state.info = action.payload
        }
    },

})


export const {changeLocation,changeDate,changeCountDay,changeInfo} = searchSlice.actions
export default searchSlice.reducer