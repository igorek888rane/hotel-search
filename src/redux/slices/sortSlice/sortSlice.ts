import {ISortState, sortByEnum, sortNameEnum} from "./sortTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: ISortState = {
    sortName: sortNameEnum.stars,
    sortBy: sortByEnum.asc,
}


const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        changeSortName: (state: ISortState, action: PayloadAction<sortNameEnum>) => {
            state.sortName = action.payload
        },
        changeSortBy: (state: ISortState, action: PayloadAction<sortByEnum>) => {
            state.sortBy = action.payload
        },
    },

})


export const {changeSortName, changeSortBy} = sortSlice.actions
export default sortSlice.reducer