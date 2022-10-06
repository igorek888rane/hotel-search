import {ISortState} from "./sortTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: ISortState = {
    sortName: 'stars',
    sortBy: 'ASC',
}


const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        changeSortName: (state: ISortState, action: PayloadAction<string>) => {
            state.sortName = action.payload
        },
        changeSortBy: (state: ISortState, action: PayloadAction<string>) => {
            state.sortBy = action.payload
        },
    },

})


export const {changeSortName, changeSortBy} = sortSlice.actions
export default sortSlice.reducer